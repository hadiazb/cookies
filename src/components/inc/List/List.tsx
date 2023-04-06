import { FC, ReactElement } from 'react'
import { ListProps as ListPropsMUI } from '@mui/material'

// styles
import { StyledList } from './list-styles'

export type ListProps = ListPropsMUI

const List: FC<ListProps> = ({ children, ...rest }): ReactElement => {
    return <StyledList {...rest}>{children}</StyledList>
}

export default List
