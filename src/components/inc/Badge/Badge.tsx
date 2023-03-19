import { FC, ReactElement } from 'react'
import { BadgeProps as BadgePropsMUI } from '@mui/material'

// styles
import { StyledBadge } from './badge-styles'

export type BadgeProps = BadgePropsMUI

const Badge: FC<BadgeProps> = ({ children, ...rest }): ReactElement => {
    return <StyledBadge {...rest}>{children}</StyledBadge>
}

export default Badge
