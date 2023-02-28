import { StyledViewLayout } from './viewLayout.module-styles'

export type ViewMainLayoutProps = {
    children: React.ReactNode
}

const ViewMainLayout: React.FC<ViewMainLayoutProps> = ({ children }) => {
    return <StyledViewLayout>{children}</StyledViewLayout>
}

export default ViewMainLayout
