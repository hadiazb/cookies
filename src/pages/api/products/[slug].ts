import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'
import { Product, IProduct } from '../../../../models'

type Data =
    | {
          message: string
      }
    | IProduct
    | typeof Product

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
    switchCaseRoute(req, res)
}

const casesMethods = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Record<string, () => Promise<void> | void> => ({
    GET: () => getProductBySlug(req, res),
    DEFAULT: () => notFountRequest(res),
})

const switchCaseRoute = (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> | void => {
    const methodArray = Object.keys(casesMethods(req, res))
    const flat = methodArray.find((method) => method === req.method) ?? false

    if (!flat) {
        return casesMethods(req, res)['DEFAULT']()
    }

    if (req.method) {
        return casesMethods(req, res)[req.method]()
    }
}

const notFountRequest = (res: NextApiResponse<Data>): void => {
    return res.status(400).json({ message: 'Endpoint no existe' })
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { slug } = req.query
    await db.connect()
    const product = await Product.findOne({ slug })
        .select('title images price inStock slug description sizes -_id')
        .lean()

    if (!product) {
        await db.disconnect()
        return res.status(400).json({ message: 'No existe' })
    }
    await db.disconnect()

    return res.status(200).json(product)
}
