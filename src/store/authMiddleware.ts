/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action, AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'

export const authMiddleware =
    (store: MiddlewareAPI) =>
    (next: Dispatch) =>
    (action: AnyAction): Action => {
        return next(action)
    }
