import type { NextApiRequest, NextApiResponse } from 'next'

// db connections
import { db, seedData } from '../../../database'

// models
import { Product } from '../../../models'

type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
): Promise<void> {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este servicio' })
    }

    await db.connect()
    await Product.deleteMany()
    await Product.insertMany(seedData.products)
    await db.disconnect()

    res.status(200).json({ message: 'Proceso realizado correctamente' })
}
