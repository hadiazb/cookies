import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database'
import { Product, IProduct } from '../../../../models'

type Data =
    | {
          message: string
      }
    | IProduct[]
    | typeof Product

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Promise<void> {
    switchCaseRoute(req, res)
}

const casesMethods = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Record<string, () => Promise<void> | void> => ({
    GET: () => getProducts(res),
    PUT: () => getProducts(res),
    UPDATE: () => getProducts(res),
    DELETE: () => getProducts(res),
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

const getProducts = async (res: NextApiResponse<Data>): Promise<void> => {
    await db.connect()
    const products = await Product.find()
    await db.disconnect()
    return res.status(200).json(products)
}
