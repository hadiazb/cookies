import { FC, ReactElement, forwardRef } from 'react'
import { SelectProps as SelectPropsMUI } from '@mui/material'

// styles
import { StyledSelect } from './select-styles'

export type SelectProps = SelectPropsMUI

// eslint-disable-next-line react/display-name
const Select: FC<SelectProps> = forwardRef(({ children, ...rest }, ref): ReactElement => {
    return (
        <StyledSelect ref={ref} {...rest}>
            {children}
        </StyledSelect>
    )
})

export default Select
