import { FC, ReactElement } from 'react'
import { PaperProps as PaperPropsMUI } from '@mui/material'

// styles
import { StyledPaper } from './paper-styles'

export type PaperProps = PaperPropsMUI

const Paper: FC<PaperProps> = ({ children, ...rest }): ReactElement => {
    return <StyledPaper {...rest}>{children}</StyledPaper>
}

export default Paper
