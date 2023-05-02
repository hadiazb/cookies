import useSWR, { SWRConfiguration } from 'swr'
import { FetcherResponse } from 'swr/_internal'

export interface IUseProducts<T> {
    products: T | undefined
    error: unknown
    isLoading: boolean
}

export const useProducts = <T>(
    url: string,
    fetcher: ((url: string) => FetcherResponse<T>) | null,
    config?: SWRConfiguration
): IUseProducts<T> => {
    const { data, error, isLoading } = useSWR<T>(url, fetcher, config)

    return { products: data, error, isLoading }
}
