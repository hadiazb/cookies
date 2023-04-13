import { FC, ReactElement } from 'react'
import { SelectProps as SelectPropsMUI } from '@mui/material'

// styles
import { StyledSelect } from './select-styles'

export type SelectProps = SelectPropsMUI

const Select: FC<SelectProps> = ({ children, ...rest }): ReactElement => {
    return <StyledSelect {...rest}>{children}</StyledSelect>
}

export default Select
