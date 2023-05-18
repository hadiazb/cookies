import { AxiosRequestConfig } from 'axios'
import { Axios } from '.'

export const getProducts = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    Axios.get<T>(url, config).then((res) => res.data)
