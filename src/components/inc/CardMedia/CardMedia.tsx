import { FC, ReactElement, ElementType } from 'react'
import { CardMediaProps as CardMediaPropsMUI } from '@mui/material'

// styles
import { StyledCardMedia } from './cardMedia-styles'

export interface CardMediaProps extends CardMediaPropsMUI {
    component?: ElementType
    alt?: string
}

const CardMedia: FC<CardMediaProps> = ({ children, ...rest }): ReactElement => {
    return <StyledCardMedia {...rest}>{children}</StyledCardMedia>
}

export default CardMedia
