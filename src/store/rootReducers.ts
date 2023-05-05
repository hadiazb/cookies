import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from './theme'
import { uiSlice } from './ui'
import { cartSlice } from './cart'

export const rootReducers = combineReducers({
    theme: themeSlice.reducer,
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
})
