import { AxiosRequestConfig } from 'axios'
import { Axios } from '.'

export const getProducts = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    Axios.get<T>(url, config).then((res) => res.data)

export const createOrders = <T, R>(url: string, data: R, config?: AxiosRequestConfig): Promise<T> =>
    Axios.post<T>(url, data, config).then((res) => res.data)

export const getOrders = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    Axios.get<T>(url, config).then((res) => res.data)
