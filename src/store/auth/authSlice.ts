import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// interfaces

export interface ShippingAddress {
    firstName: string
    lastName: string
    address: string
    address2?: string
    zip: string
    city: string
    country: string
    phone: string
}

export interface AuthState {
    loading: boolean
    error: string | null
    token: string | null
    user: { _id: string; email: string; name: string; role: string } | null
    location: ShippingAddress | null
}

const initialState: AuthState = {
    error: null,
    loading: false,
    token: null,
    user: null,
    location: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLoading: (state) => {
            state.loading = true
        },
        onError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },
        onSetUser: (
            state,
            action: PayloadAction<Omit<AuthState, 'error' | 'loading' | 'location'>>
        ) => {
            if (action.payload.token && action.payload.user) {
                state.token = action.payload.token
                state.user = action.payload.user
            }
            state.loading = false
            state.error = null
        },
        onSetUserWithoutToken: (
            state,
            action: PayloadAction<Omit<AuthState, 'error' | 'loading' | 'location' | 'token'>>
        ) => {
            if (action.payload.user) {
                state.user = action.payload.user
            }
            state.loading = false
            state.error = null
        },
        onReset: (state) => {
            state.error = null
            state.loading = false
            state.token = null
            state.user = null
            state.location = null
        },
        onSetLocation: (
            state,
            action: PayloadAction<{
                firstName: string
                lastName: string
                address: string
                address2?: string
                zip: string
                city: string
                country: string
                phone: string
            }>
        ) => {
            state.location = action.payload
        },
    },
})

// Actions Creators
export const { onSetUser, onLoading, onError, onReset, onSetLocation, onSetUserWithoutToken } =
    authSlice.actions

// Reducers
export default authSlice.reducer
