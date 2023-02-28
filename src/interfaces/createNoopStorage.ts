export interface CreateNoopStorage {
    getItem(_key: string): Promise<null>
    setItem(_key: string, value: unknown): Promise<unknown>
    removeItem(_key: string): Promise<void>
}
