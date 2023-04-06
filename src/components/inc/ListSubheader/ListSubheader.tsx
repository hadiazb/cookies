import { FC, ReactElement } from 'react'
import { ListSubheaderProps as ListSubheaderPropsMUI } from '@mui/material'

// styles
import { StyledListSubheader } from './listSubheader-styles'

export type ListSubheaderProps = ListSubheaderPropsMUI

const ListSubheader: FC<ListSubheaderProps> = ({ children, ...rest }): ReactElement => {
    return <StyledListSubheader {...rest}>{children}</StyledListSubheader>
}

export default ListSubheader
