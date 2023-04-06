import { FC, ReactElement } from 'react'
import { ListItemProps as ListItemPropsMUI } from '@mui/material'

// styles
import { StyledListItem } from './listItem-styles'

export type ListItemProps = ListItemPropsMUI

const ListItem: FC<ListItemProps> = ({ children, ...rest }): ReactElement => {
    return <StyledListItem {...rest}>{children}</StyledListItem>
}

export default ListItem
