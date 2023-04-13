import { FC, ReactElement } from 'react'
import { FormHelperTextProps as FormHelperTextPropsMUI } from '@mui/material'

// styles
import { StyledFormHelperText } from './formHelperText-styles'

export type FormHelperTextProps = FormHelperTextPropsMUI

const FormHelperText: FC<FormHelperTextProps> = ({ children, ...rest }): ReactElement => {
    return <StyledFormHelperText {...rest}>{children}</StyledFormHelperText>
}

export default FormHelperText
