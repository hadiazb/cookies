import { AxiosError, isAxiosError } from 'axios'
import { AppDispatch } from '../store'

// actions
import { onLoading, onError, onCreateOrder, onGetOrders } from '.'

// apis
import { createOrders, getOrders } from '@/apis'

// models
import { ShippingAddress } from '../auth'
import { IOrder } from '@/interfaces'

export type ICreateOrder = IOrder

export type ICreateOrderResponse = IOrder

export interface Management<T> {
    onSuccess?: (data: T) => void
    onErr?: (err: AxiosError) => void
}

export const onGenerateOrder =
    (
        shippingAddress: ShippingAddress | null,
        data: ICreateOrder,
        { onSuccess, onErr }: Management<ICreateOrderResponse>
    ) =>
    async (dispatch: AppDispatch) => {
        if (!shippingAddress) {
            throw new Error('No hay direccion de entrega')
        }

        dispatch(onLoading())

        try {
            const resp = await createOrders<ICreateOrderResponse, ICreateOrder>('/orders', data)

            dispatch(onCreateOrder(resp))

            if (onSuccess) {
                onSuccess(resp)
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

export const onGetOrder =
    ({ onSuccess, onErr }: Management<IOrder[]>) =>
    async (dispatch: AppDispatch) => {
        dispatch(onLoading())

        try {
            const resp = await getOrders<IOrder[]>('/orders')

            dispatch(onGetOrders(resp))

            if (onSuccess) {
                onSuccess(resp)
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
