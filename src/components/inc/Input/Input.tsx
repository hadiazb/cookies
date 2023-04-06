import { FC, ReactElement } from 'react'
import { InputProps as InputPropsMUI } from '@mui/material'

// styles
import { StyledInput } from './input-styles'

export type InputProps = InputPropsMUI

const Input: FC<InputProps> = ({ ...rest }): ReactElement => {
    return <StyledInput {...rest} />
}

export default Input
