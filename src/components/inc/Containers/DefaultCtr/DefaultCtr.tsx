import { StyledDefaultCtr } from './defaultCtr-styles'

export interface DefaultCtrProps {
    children: React.ReactNode
}

const DefaultCtr: React.FC<DefaultCtrProps> = ({ children }) => {
    return <StyledDefaultCtr>{children}</StyledDefaultCtr>
}

export default DefaultCtr
