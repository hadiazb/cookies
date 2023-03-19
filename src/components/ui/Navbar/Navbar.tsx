import { ReactElement } from 'react'
import NextLink from 'next/link'

import { SearchOutlined, ShoppingCart } from '@mui/icons-material'

// components
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    DefaultButton,
    IconButton,
    Badge,
} from '@/components/inc'

// styles
import { StyledNavbar } from './navbar-styles'

const Navbar = (): ReactElement => {
    return (
        <AppBar>
            <StyledNavbar>
                <Toolbar>
                    <NextLink href="/" passHref className="navbar-link">
                        <Typography variant="h5" color="secondary">
                            Teslo |
                        </Typography>
                        <Typography sx={{ ml: 0.5 }} variant="h6" color="secondary">
                            Shop
                        </Typography>
                    </NextLink>
                    <Box flex={1} />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <NextLink href="/category/men" passHref className="link">
                            <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
                                Hombres
                            </DefaultButton>
                        </NextLink>
                        <NextLink href="/category/women" passHref className="link">
                            <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
                                Mujeres
                            </DefaultButton>
                        </NextLink>
                        <NextLink href="/category/children" passHref className="link">
                            <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
                                Niños
                            </DefaultButton>
                        </NextLink>
                    </Box>
                    <Box flex={1} />
                    <IconButton>
                        <SearchOutlined color="secondary" />
                    </IconButton>
                    <NextLink href="/cart" passHref>
                        <IconButton>
                            <Badge badgeContent={2} color="error">
                                <ShoppingCart color="secondary" />
                            </Badge>
                        </IconButton>
                    </NextLink>
                    <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
                        Menu
                    </DefaultButton>
                </Toolbar>
            </StyledNavbar>
        </AppBar>
    )
}

export default Navbar
