import { FC, ReactElement } from 'react'
import type { TextFieldProps } from '@mui/material'

// styles
import { StyledInput } from './defaultInput-styles'

export type DefaultInputProps = TextFieldProps

const DefaultInput: FC<DefaultInputProps> = ({ ...rest }): ReactElement => {
    return <StyledInput {...rest} />
}

export default DefaultInput
