import { FC, ReactElement } from 'react'
import type { DrawerProps as DrawerPropsMUI } from '@mui/material'

// styles
import { StyledDrawer } from './drawer-styles'

export type DrawerProps = DrawerPropsMUI

const Drawer: FC<DrawerProps> = ({ ...rest }): ReactElement => {
    return <StyledDrawer {...rest} />
}

export default Drawer
