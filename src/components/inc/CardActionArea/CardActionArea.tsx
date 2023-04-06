import { FC, ReactElement } from 'react'
import { CardActionAreaProps as CardActionAreaPropsMUI } from '@mui/material'

// styles
import { StyledCardActionArea } from './cardActionArea-styles'

export type CardActionAreaProps = CardActionAreaPropsMUI

const CardActionArea: FC<CardActionAreaProps> = ({ children, ...rest }): ReactElement => {
    return <StyledCardActionArea {...rest}>{children}</StyledCardActionArea>
}

export default CardActionArea
