import { FC, ReactElement } from 'react'
import { ToolbarProps as ToolbarPropsMUI } from '@mui/material'

// styles
import { StyleToolbar } from './toolbar-styles'

export type ToolbarProps = ToolbarPropsMUI

const Toolbar: FC<ToolbarProps> = ({ children, ...rest }): ReactElement => {
    return <StyleToolbar {...rest}>{children}</StyleToolbar>
}

export default Toolbar
