import { FC, ReactElement } from 'react'
import { CardContentProps as CardContentPropsMUI } from '@mui/material'

// styles
import { StyledCardContent } from './cardContent-styles'

export type CardContentProps = CardContentPropsMUI

const Alert: FC<CardContentProps> = ({ children, ...rest }): ReactElement => {
    return <StyledCardContent {...rest}>{children}</StyledCardContent>
}

export default Alert
