import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
    showSidebar: boolean
}

const initialState: UIState = {
    showSidebar: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onShowOrHideSidebar: (state) => {
            state.showSidebar = !state.showSidebar
        },
    },
})

// Actions Creators
export const { onShowOrHideSidebar } = uiSlice.actions

// Reducers
export default uiSlice.reducer
