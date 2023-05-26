import { AxiosError, isAxiosError } from 'axios'
import Cookies from 'js-cookie'

// store
import { AppDispatch } from '../store'

// apis
import { login, registerUser, validateToken } from '@/apis'

// actions
import { onLoading, onError, onReset } from '.'

export interface FormLogin {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    user: { email: string; name: string; role: string }
}

export interface Management<T> {
    onSuccess?: (data: T) => void
    onErr?: (err: AxiosError) => void
}

export const onLogin =
    ({ email, password, onSuccess, onErr }: FormLogin & Management<LoginResponse>) =>
    async (dispatch: AppDispatch) => {
        dispatch(onLoading())
        try {
            const { token, user } = await login<LoginResponse>('/user/login', { email, password })
            Cookies.set('token', token)
            if (onSuccess) {
                onSuccess({ token, user })
            }
        } catch (error) {
            if (!isAxiosError(error))
                return dispatch(onError('Error en el sistema intente mas tarde'))

            dispatch(onError(error.response?.data.message))
            if (onErr) {
                onErr(error)
            }
        }
    }

export interface RegisterResponse {
    email: string
    name: string
    role: string
}

export const onRegister =
    ({
        name,
        email,
        password,
        onSuccess,
        onErr,
    }: FormLogin & { name: string } & Management<LoginResponse>) =>
    async (dispatch: AppDispatch) => {
        dispatch(onLoading())
        try {
            await registerUser<RegisterResponse>('/user/register', {
                email,
                password,
                name,
            })

            const { token, user } = await login<LoginResponse>('/user/login', { email, password })
            Cookies.set('token', token)

            if (onSuccess) {
                onSuccess({ token, user })
            }
        } catch (error) {
            if (!isAxiosError(error))
                return dispatch(onError('Error en el sistema intente mas tarde'))

            dispatch(onError(error.response?.data.message))

            if (onErr) {
                onErr(error)
            }
        }
    }

export const onValidateToken =
    (params?: Management<LoginResponse>) => async (dispatch: AppDispatch) => {
        dispatch(onLoading())
        try {
            const { token, user } = await validateToken<LoginResponse>('/user/validate-token')
            Cookies.set('token', token)
            if (params && params.onSuccess) {
                params.onSuccess({ token, user })
            }
        } catch (error) {
            dispatch(onReset())
            Cookies.remove('token')
        }
    }
