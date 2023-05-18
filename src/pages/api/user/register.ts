import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { db } from '../../../../database'
import { User } from '../../../../models'
import { isEmail } from '@/utils'

type Data =
    | {
          message: string
      }
    | {
          _id: string
          email: string
          name: string
          role: string
      }

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
    POST: () => registerUser(req, res),
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

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const {
        name = '',
        email = '',
        password = '',
    } = req.body as { email: string; password: string; name: string }

    if (password.length < 5) {
        return res.status(400).json({ message: 'La contraseña debe ser de 5 caracteres' })
    }

    if (name.length < 2) {
        return res.status(400).json({ message: 'El nombre debe ser de minimo 2 caracteres' })
    }

    if (isEmail(email)) {
        return res.status(400).json({ message: 'El correo no es valido' })
    }

    await db.connect()

    const user = await User.findOne({ email })

    if (user) {
        await db.disconnect()
        return res.status(400).json({ message: 'Este correo ya fue registrado' })
    }

    const newUser = await User.create({
        name,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password),
        role: 'client',
    })
    await db.disconnect()

    return res.status(200).json(newUser)
}
