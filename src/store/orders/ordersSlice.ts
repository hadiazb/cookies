import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// interfaces
import { IOrder } from '@/interfaces'

export interface OrderState {
    currentOrder: IOrder | null
    orders: IOrder[]
    loading: boolean
    error: null | string
}

const initialState: OrderState = {
    currentOrder: null,
    orders: [],
    loading: false,
    error: null,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        onLoading: (state) => {
            state.loading = true
        },
        onCreateOrder: (state, action: PayloadAction<IOrder>) => {
            state.currentOrder = action.payload
            state.error = null
            state.loading = false
        },
        onGetOrders: (state, action: PayloadAction<IOrder[]>) => {
            state.orders = action.payload
            state.error = null
            state.loading = false
        },
        onError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },
    },
})

// Actions Creators
export const { onLoading, onError, onCreateOrder, onGetOrders } = orderSlice.actions

// Reducers
export default orderSlice.reducer
