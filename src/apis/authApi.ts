import { AxiosRequestConfig } from 'axios'
import { Axios } from '.'

export const login = <T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> =>
    Axios.post<T>(url, data, config).then((res) => res.data)

export const registerUser = <T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
): Promise<T> => Axios.post<T>(url, data, config).then((res) => res.data)

export const validateToken = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    Axios.get<T>(url, config).then((res) => res.data)
