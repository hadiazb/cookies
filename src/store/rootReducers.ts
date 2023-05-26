import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from './theme'
import { uiSlice } from './ui'
import { cartSlice } from './cart'
import { authSlice } from './auth'
import { orderSlice } from './orders'

export const rootReducers = combineReducers({
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
})
