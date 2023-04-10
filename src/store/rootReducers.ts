import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from './theme'
import { uiSlice } from './ui'

export const rootReducers = combineReducers({
    theme: themeSlice.reducer,
    ui: uiSlice.reducer,
})
