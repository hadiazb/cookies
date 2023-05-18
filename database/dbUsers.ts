import bcrypt from 'bcryptjs'

import { User } from '../models'
import { db } from './'

export interface IUser {
    _id: string
    email: string
    role: string
    name: string
}

export const checkUserEmailPassword = async (
    email: string,
    password: string
): Promise<IUser | null> => {
    await db.connect()
    const user = await User.findOne({ email })
    await db.disconnect()

    if (!user) {
        return null
    }

    if (!user.password) {
        return null
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return null
    }

    const { role, name, _id } = user

    return {
        _id,
        email: email.toLocaleLowerCase(),
        role,
        name,
    }
}

export const oAUthToDbUser = async (oAuthEmail: string, oAuthName: string): Promise<IUser> => {
    await db.connect()
    const user = await User.findOne({ email: oAuthEmail })

    if (user) {
        await db.disconnect()
        const { _id, name, email, role } = user
        return { _id, name, email, role }
    }

    const newUser = new User({ email: oAuthEmail, name: oAuthName, password: '@', role: 'client' })
    await newUser.save()
    await db.disconnect()

    const { _id, name, email, role } = newUser
    return { _id, name, email, role }
}
