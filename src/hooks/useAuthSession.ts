import { useEffect } from 'react'
import { UseSessionOptions, useSession } from 'next-auth/react'
import { Session } from 'next-auth'

export interface IUseAuthSession {
    status: 'authenticated' | 'loading' | 'unauthenticated'
    data: Session | null
}

export const useAuthSession = (
    options?: UseSessionOptions<boolean> | undefined
): IUseAuthSession => {
    const { data, status } = useSession(options)

    useEffect(() => {
        if (status === 'authenticated') {
            console.log({ user: data.user })
        }
    }, [status, data])

    return {
        status,
        data,
    }
}
