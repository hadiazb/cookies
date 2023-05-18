import tw, { styled } from 'twin.macro'
import { Select, SelectProps } from '@mui/material'

export type DefaultSelectProps = SelectProps

export const StyledSelect = styled(Select)<DefaultSelectProps>`
    ${tw``}
`
