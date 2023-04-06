import { FC, ReactElement } from 'react'
import { InputAdornmentProps as InputAdornmentPropsMUI } from '@mui/material'

// styles
import { StyledInputAdornment } from './inputAdornment-styles'

export type InputAdornmentProps = InputAdornmentPropsMUI

const InputAdornment: FC<InputAdornmentProps> = ({ ...rest }): ReactElement => {
    return <StyledInputAdornment {...rest} />
}

export default InputAdornment
