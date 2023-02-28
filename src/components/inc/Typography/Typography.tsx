import { FC, ReactElement } from 'react'
import { TypographyProps as TypographyPropsMUI } from '@mui/material'

// styles
import { StyledTypography } from './typography-styles'

export type TypographyProps = TypographyPropsMUI

const Typography: FC<TypographyProps> = ({ children, ...rest }): ReactElement => (
    <StyledTypography {...rest}>{children}</StyledTypography>
)

export default Typography
