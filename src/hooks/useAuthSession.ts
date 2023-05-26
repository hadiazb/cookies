import { useEffect } from 'react'
import { UseSessionOptions, useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { useDispatch } from 'react-redux'

// store
import { AppDispatch } from '@/store/store'
import { onSetUserWithoutToken } from '@/store/auth'

export interface IUseAuthSession {
    status: 'authenticated' | 'loading' | 'unauthenticated'
    data: Session | null
}

export const useAuthSession = (
    options?: UseSessionOptions<boolean> | undefined
): IUseAuthSession => {
    const dispatch: AppDispatch = useDispatch()
    const { data, status } = useSession(options)

    useEffect(() => {
        if (status === 'authenticated') {
            const user = data.user as unknown as {
                email: string
                name: string
                role: string
                _id: string
            } | null

            dispatch(onSetUserWithoutToken({ user }))
        }
    }, [status, data, dispatch])

    return {
        status,
        data,
    }
}
