import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { PersistGate } from 'redux-persist/integration/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

// state
import { store, persistor } from '../../../store/store'

export type MainLayoutProps = {
    children: React.ReactNode
}

const initialOptions = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
}

const MainStateLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PayPalScriptProvider options={initialOptions}>{children}</PayPalScriptProvider>
                </PersistGate>
            </Provider>
        </SessionProvider>
    )
}

export default MainStateLayout
