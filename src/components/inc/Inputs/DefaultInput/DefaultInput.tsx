import { FC, ReactElement, forwardRef } from 'react'
import type { TextFieldProps } from '@mui/material'

// styles
import { StyledInput } from './defaultInput-styles'

export type DefaultInputProps = TextFieldProps

// eslint-disable-next-line react/display-name
const DefaultInput: FC<DefaultInputProps> = forwardRef(({ ...rest }, ref): ReactElement => {
    return <StyledInput ref={ref} {...rest} />
})

export default DefaultInput
