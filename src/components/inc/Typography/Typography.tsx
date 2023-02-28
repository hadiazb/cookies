import { FC, ReactElement } from 'react'
import { TypographyProps as TypographyPropsMUI } from '@mui/material'

// styles
import { StyledTypography } from './typography-styles'

export interface TypographyProps extends TypographyPropsMUI {
    [extraProps: string]: any
}

const Typography: FC<TypographyProps> = ({ children, ...rest }): ReactElement => (
    <StyledTypography {...rest}>{children}</StyledTypography>
)

export default Typography
