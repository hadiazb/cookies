import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { PersistGate } from 'redux-persist/integration/react'

// state
import { store, persistor } from '../../../store/store'

export type MainLayoutProps = {
    children: React.ReactNode
}

const MainStateLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </SessionProvider>
    )
}

export default MainStateLayout
