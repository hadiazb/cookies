import { FC, ReactElement } from 'react'
import { ListItemIconProps as ListItemIconPropsMUI } from '@mui/material'

// styles
import { StyledListItemIcon } from './listItemIcon-styles'

export type ListItemIconProps = ListItemIconPropsMUI

const ListItemIcon: FC<ListItemIconProps> = ({ children, ...rest }): ReactElement => {
    return <StyledListItemIcon {...rest}>{children}</StyledListItemIcon>
}

export default ListItemIcon
