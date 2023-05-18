import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// interfaces

export interface AuthState {
    loading: boolean
    error: string | null
    token: string | null
    user: { email: string; name: string; role: string } | null
    location: {
        firstName: string
        lastName: string
        address: string
        address2?: string
        zip: string
        city: string
        country: string
        phone: string
    } | null
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
        onSetUser: (state, action: PayloadAction<Omit<AuthState, 'error' | 'loading'>>) => {
            if (action.payload.token && action.payload.user) {
                state.token = action.payload.token
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
export const { onSetUser, onLoading, onError, onReset, onSetLocation } = authSlice.actions

// Reducers
export default authSlice.reducer
