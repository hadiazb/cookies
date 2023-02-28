import { FC, ReactElement } from 'react'
import { LinkProps as LinkPropsMUI } from '@mui/material'

// styles
import { StyledLink } from './link-styles'

export type LinkProps = LinkPropsMUI

const Link: FC<LinkProps> = ({ children, ...rest }): ReactElement => {
    return <StyledLink {...rest}>{children}</StyledLink>
}

export default Link
