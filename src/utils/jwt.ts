import jwt from 'jsonwebtoken'

export const signJwt = (_id: string, email: string): string => {
    if (!process.env.SECRET_KEY) {
        throw new Error('No tiene secreto valido')
    }

    return jwt.sign({ _id, email }, process.env.SECRET_KEY, {
        expiresIn: '30d',
    })
}

export const verifyJwt = (token: string): Promise<string> => {
    if (!process.env.SECRET_KEY) {
        throw new Error('No tiene secreto valido')
    }

    if (token.length < 20) {
        return Promise.reject('JWT no valido')
    }

    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, process.env.SECRET_KEY || '', (err, payload) => {
                if (err) {
                    return reject('JWT no Valido')
                }

                const { _id } = payload as { _id: string }

                resolve(_id)
            })
        } catch (error) {
            reject('JWT no es valido')
        }
    })
}
