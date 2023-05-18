export const isAuthToken = (token: string | null, callback: () => void): void => {
    if (token) {
        callback()
    }
}
