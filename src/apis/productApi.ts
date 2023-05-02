import axios, { AxiosRequestConfig } from 'axios'
import axiosRetry from 'axios-retry'

const productApi = axios.create({
    baseURL: '/api',
})

export const getProducts = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    productApi.get<T>(url, config).then((res) => res.data)

axiosRetry(productApi, { retryDelay: axiosRetry.exponentialDelay })

export default productApi
