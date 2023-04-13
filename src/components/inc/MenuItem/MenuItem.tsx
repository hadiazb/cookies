import { FC, ReactElement } from 'react'
import { MenuItemProps as MenuItemPropsMUI } from '@mui/material'

// styles
import { StyledMenuItem } from './menuItem-styles'

export type MenuItemProps = MenuItemPropsMUI

const MenuItem: FC<MenuItemProps> = ({ children, ...rest }): ReactElement => {
    return <StyledMenuItem {...rest}>{children}</StyledMenuItem>
}

export default MenuItem
