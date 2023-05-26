/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

// database
import { db } from '../../../../database'

// models
import { Product, Order } from '../../../../models'
import { IOrder } from '@/interfaces'

type Data =
    | {
          message: string
      }
    | IOrder
    | IOrder[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
    switchCaseRoute(req, res)
}

const casesMethods = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Record<string, () => Promise<void> | void> => ({
    GET: () => getOrders(req, res),
    POST: () => createOrder(req, res),
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

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { orderItems, total } = req.body as IOrder

    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!session) {
        return res.status(401).json({ message: 'Debe estar autenticado' })
    }

    const productsIds = orderItems.map((product) => product._id)

    await db.connect()
    const dbProducts = await Product.find({ _id: { $in: productsIds } })

    try {
        const subTotal = orderItems.reduce((prev, current) => {
            const currentPrice = dbProducts.find((prod) => prod.id === current._id)?.price

            if (!currentPrice) {
                throw new Error('Verifique el Carrito de nuevo, producto no existe')
            }
            return currentPrice * current.quantity + prev
        }, 0)

        const taxRate = 15
        const backendTotal = subTotal + (taxRate * subTotal) / 100

        if (total !== backendTotal) {
            throw new Error(`El total no cuadra con el monto`)
        }

        const userId = session.user._id
        const newOrder = new Order({ ...req.body, isPaid: false, user: userId })
        newOrder.total = Math.round(newOrder.total * 100) / 100
        await newOrder.save()
        await db.disconnect()

        return res.status(201).json(newOrder)
    } catch (error: any) {
        await db.disconnect()
        res.status(400).json({ message: error.message })
    }
}

const getOrders = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if (!session) {
        return res.status(401).json({ message: 'Debe estar autenticado' })
    }

    await db.connect()

    try {
        const orders = await Order.find({ user: session.user._id }).lean()
        await db.disconnect()
        return res.status(200).json(orders)
    } catch (error) {
        await db.disconnect()
        return res.status(400).json({ message: 'No hay ordernes' })
    }
}
