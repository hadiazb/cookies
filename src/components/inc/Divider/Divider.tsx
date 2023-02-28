import { FC, ReactElement } from 'react'
import type { DividerProps as DividerPropsMUI } from '@mui/material'

// styles
import { StyledDivider } from './divider-styles'

export type DividerProps = DividerPropsMUI

const Divider: FC<DividerProps> = ({ ...rest }): ReactElement => {
    return <StyledDivider {...rest} />
}

export default Divider
