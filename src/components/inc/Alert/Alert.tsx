import { FC, ReactElement } from 'react'
import { AlertProps as AlertPropsMUI } from '@mui/material'

// styles
import { StyledAlert } from './alert-styles'

export type AlertProps = AlertPropsMUI

const Alert: FC<AlertProps> = ({ children, ...rest }): ReactElement => {
    return <StyledAlert {...rest}>{children}</StyledAlert>
}

export default Alert
