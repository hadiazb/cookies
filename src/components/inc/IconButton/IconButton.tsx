import { FC, ReactElement } from 'react'
import { IconButtonProps as IconButtonPropsMUI } from '@mui/material'

// styles
import { StyleIconButton } from './iconButton-styles'

export type IconButtonProp = IconButtonPropsMUI

const IconButton: FC<IconButtonProp> = ({ children, ...rest }): ReactElement => {
    return <StyleIconButton {...rest}>{children}</StyleIconButton>
}

export default IconButton
