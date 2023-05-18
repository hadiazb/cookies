import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

import { signJwt } from '@/utils'

import { db } from '../../../../database'
import { User } from '../../../../models'

type Data =
    | {
          message: string
      }
    | {
          token: string
          user: {
              email: string
              name: string
              role: string
          }
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
    POST: () => loginUser(req, res),
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

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { email = '', password = '' } = req.body

    await db.connect()
    const user = await User.findOne({ email })
    await db.disconnect()

    if (!user || !user.password) {
        return res.status(400).json({ message: 'Email o contraseña no valida' })
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: 'Email o contraseña no valida' })
    }

    const { role, name, _id } = user

    return res.status(200).json({
        token: signJwt(_id, email),
        user: {
            email,
            role,
            name,
        },
    })
}
