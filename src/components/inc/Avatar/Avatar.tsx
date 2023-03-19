import { FC, ReactElement } from 'react'
import { AvatarProps as AvatarPropsMUI } from '@mui/material'

// styles
import { StyledAvatar } from './avatar-styles'

export type AvatarProps = AvatarPropsMUI

const Avatar: FC<AvatarProps> = ({ children, ...rest }): ReactElement => {
    return <StyledAvatar {...rest}>{children}</StyledAvatar>
}

export default Avatar
