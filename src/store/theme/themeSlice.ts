import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
    mode: 'dark' | 'light'
}

const initialState: ThemeState = {
    mode: 'light',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        onChangeModeTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'
        },
    },
})

// Actions Creators
export const { onChangeModeTheme } = themeSlice.actions

// Reducers
export default themeSlice.reducer
