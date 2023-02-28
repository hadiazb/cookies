import tw, { styled } from 'twin.macro'
import { TextField } from '@mui/material'

export const StyledInput = styled(TextField)`
    & label {
        ${tw`!font-montserrat`}
    }
`
