import { FC, ReactElement } from 'react'
import { CardProps as CardPropsMUI } from '@mui/material'

// styles
import { StyledCard } from './card-styles'

export type CardProps = CardPropsMUI

const Card: FC<CardProps> = ({ children, ...rest }): ReactElement => {
    return <StyledCard {...rest}>{children}</StyledCard>
}

export default Card
