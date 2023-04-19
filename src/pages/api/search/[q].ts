import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'
import { Product, IProduct } from '../../../../models'

type Data =
    | {
          message: string
      }
    | IProduct[]
    | typeof Product

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
    switchCaseRoute(req, res)
}

const casesMethods = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Record<string, () => Promise<void> | void> => ({
    GET: () => searchProducts(req, res),
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
    return res.status(400).json({ message: 'Bad request' })
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    let { q = '' } = req.query
    if (q.length === 0) {
        await db.disconnect()
        return res.status(400).json({ message: 'Debe especificar de forma correcta el query' })
    }
    q = q.toString().toLowerCase()

    await db.connect()
    const products = await Product.find({
        $text: {
            $search: q,
        },
    })
        .select('title images price inStock slug -_id')
        .lean()

    await db.disconnect()

    return res.status(200).json(products)
}
