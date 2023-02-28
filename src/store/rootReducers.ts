import { combineReducers } from '@reduxjs/toolkit'

import { themeSlice } from './theme'

export const rootReducers = combineReducers({
    theme: themeSlice.reducer,
})
