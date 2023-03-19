import { FC, ReactElement } from 'react'
import { BoxProps as BoxPropsMUI } from '@mui/material'

// styles
import { StyledBox } from './box-styles'

export type BoxProps = BoxPropsMUI

const Box: FC<BoxProps> = ({ children, ...rest }): ReactElement => {
    return <StyledBox {...rest}>{children}</StyledBox>
}

export default Box
