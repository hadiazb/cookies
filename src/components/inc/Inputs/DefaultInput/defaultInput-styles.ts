import tw, { styled } from 'twin.macro'
import { TextField, TextFieldProps } from '@mui/material'

export type DefaultInputProps = TextFieldProps

export const StyledInput = styled(TextField)<DefaultInputProps>`
    & label {
        ${tw`!font-montserrat`}
    }
`
