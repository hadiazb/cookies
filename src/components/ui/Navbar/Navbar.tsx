import { ReactElement } from 'react'
import NextLink from 'next/link'

// components
import { AppBar, Toolbar, IconButton, Typography } from '@/components/inc'

// icons
import { MenuOutlined } from '@mui/icons-material'

// styles
import { StyledNavbar } from './navbar-styles'

const Navbar = (): ReactElement => {
    return (
        <AppBar>
            <StyledNavbar>
                <Toolbar>
                    <IconButton size="large" edge="start" sx={{ mr: 3 }}>
                        <MenuOutlined />
                    </IconButton>

                    <NextLink href="/" passHref className="navbar-link">
                        <Typography variant="h6" color="white">
                            CookieMaster
                        </Typography>
                    </NextLink>
                    <NextLink href="/theme-change" passHref className="navbar-link">
                        <Typography variant="h6" color="white">
                            Cambiar Tema
                        </Typography>
                    </NextLink>
                </Toolbar>
            </StyledNavbar>
        </AppBar>
    )
}

export default Navbar
