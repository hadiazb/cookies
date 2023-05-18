import axios from 'axios'
import axiosRetry from 'axios-retry'

export const Axios = axios.create({
    baseURL: '/api',
})

axiosRetry(Axios, { retryDelay: axiosRetry.exponentialDelay })

let requestInterceptor: number

export const interceptors = (token: string | null): void => {
    if (typeof requestInterceptor !== 'undefined') {
        Axios.interceptors.request.eject(requestInterceptor)
    }
    Axios.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    )

    Axios.interceptors.response.use(
        (data) => {
            return data
        },
        (err) => {
            return Promise.reject(err)
        }
    )
}
