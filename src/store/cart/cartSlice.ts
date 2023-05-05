import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// interfaces
import { ICartProduct } from '@/interfaces'

export interface CartState {
    products: ICartProduct[]
    interestRate: number
}

const initialState: CartState = {
    products: [],
    interestRate: 15,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartProduct>) => {
            const productIntCart = state.products.some((p) => p._id === action.payload._id)
            if (!productIntCart) {
                state.products = [...state.products, action.payload]
                return
            }
            const productIntCartButDifferentSize = state.products.some(
                (p) => p._id === action.payload._id && p.size === action.payload.size
            )

            if (!productIntCartButDifferentSize) {
                state.products = [...state.products, action.payload]
                return
            }
            state.products = state.products.map((p) => {
                if (p._id !== action.payload._id) {
                    return p
                }
                if (p.size !== action.payload.size) {
                    return p
                }

                p.quantity += action.payload.quantity

                return p
            })
        },
        updateToCart: (state, action: PayloadAction<ICartProduct>) => {
            state.products = state.products.map((p) => {
                if (p._id !== action.payload._id) {
                    return p
                }
                if (p.size !== action.payload.size) {
                    return p
                }

                return action.payload
            })
        },
        removeToCart: (state, action: PayloadAction<ICartProduct>) => {
            state.products = state.products.filter(
                (p) => !(p._id === action.payload._id && p.size === action.payload.size)
            )
        },
    },
})

// Actions Creators
export const { addToCart, removeToCart, updateToCart } = cartSlice.actions

// Reducers
export default cartSlice.reducer
