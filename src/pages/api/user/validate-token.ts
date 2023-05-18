import type { NextApiRequest, NextApiResponse } from 'next'

import { signJwt, verifyJwt } from '@/utils'

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
    GET: () => validateJwt(req, res),
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

const validateJwt = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
    const { authorization } = req.headers as { authorization: string | undefined }

    if (!authorization) {
        return res.status(401).json({ message: 'No existe token' })
    }

    const token = authorization.replace('Bearer ', '')

    await db.connect()

    try {
        const _id = await verifyJwt(token)
        const user = await User.findById(_id).lean()

        await db.disconnect()

        if (!user) {
            return res.status(401).json({ message: 'no existe usuario' })
        }
        const { email, role, name } = user

        return res.status(200).json({
            token: signJwt(_id, email),
            user: {
                email,
                role,
                name,
            },
        })
    } catch (error) {
        await db.disconnect()
        return res.status(401).json({ message: 'token no valido' })
    }
}
