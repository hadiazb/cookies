import { FC, ReactElement } from 'react'
import { InputLabelProps as InputLabelPropsMUI } from '@mui/material'

// styles
import { StyledInputLabel } from './inputLabel-styles'

export type InputLabelProps = InputLabelPropsMUI

const InputLabel: FC<InputLabelProps> = ({ ...rest }): ReactElement => {
    return <StyledInputLabel {...rest} />
}

export default InputLabel
