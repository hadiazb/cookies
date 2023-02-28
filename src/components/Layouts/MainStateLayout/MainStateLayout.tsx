import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// state
import { store, persistor } from '../../../store/store'

export type MainLayoutProps = {
    children: React.ReactNode
}

const MainStateLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default MainStateLayout
