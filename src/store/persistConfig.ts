/* eslint-disable @typescript-eslint/no-unused-vars */
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

// interfaces
import { CreateNoopStorage } from '../interfaces'

export const createNoopStorage = (): CreateNoopStorage => ({
    getItem(_key: string) {
        return Promise.resolve(null)
    },
    setItem(_key: string, value: unknown) {
        return Promise.resolve(value)
    },
    removeItem(_key: string) {
        return Promise.resolve()
    },
})

export const storage =
    typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['ui'],
}
