import { FC, ReactElement } from 'react'
import type { TextFieldProps } from '@mui/material'

// styles
import { StyledInput } from './defaultInput-styles'

export type DefaultInputProps = TextFieldProps

const DefaultInput: FC<DefaultInputProps> = ({
    label,
    defaultValue,
    error,
    helperText,

    ...rest
}): ReactElement => {
    return (
        <StyledInput
            label={label}
            helperText={helperText}
            defaultValue={defaultValue}
            error={error}
            {...rest}
        >
            DefaultInput
        </StyledInput>
    )
}

export default DefaultInput
