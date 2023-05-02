import { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

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

// store
import { AppDispatch } from '../../../store/store'
import * as actions from '../../../store/ui'

const Navbar = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const { pathname } = useRouter()

    const onShowOrHideSidebar = (): void => {
        dispatch(actions.onShowOrHideSidebar())
    }

    const styleOption = { mx: 0.5, height: '30px', borderRadius: 10 }

    return (
        <AppBar>
            <StyledNavbar>
                <Toolbar>
                    <Link href="/" className="navbar-link">
                        <Typography variant="h5" color="secondary">
                            Teslo |
                        </Typography>
                        <Typography sx={{ ml: 0.5 }} variant="h6" color="secondary">
                            Shop
                        </Typography>
                    </Link>
                    <Box flex={1} />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Link href="/category/men" className="link">
                            <DefaultButton
                                sx={styleOption}
                                variant={pathname === '/category/men' ? 'contained' : 'text'}
                                color="secondary"
                            >
                                Hombres
                            </DefaultButton>
                        </Link>
                        <Link href="/category/women" className="link">
                            <DefaultButton
                                sx={styleOption}
                                variant={pathname === '/category/women' ? 'contained' : 'text'}
                                color="secondary"
                            >
                                Mujeres
                            </DefaultButton>
                        </Link>
                        <Link href="/category/kid" className="link">
                            <DefaultButton
                                sx={styleOption}
                                variant={pathname === '/category/kid' ? 'contained' : 'text'}
                                color="secondary"
                            >
                                Niños
                            </DefaultButton>
                        </Link>
                    </Box>
                    <Box flex={1} />
                    <IconButton>
                        <SearchOutlined color="secondary" />
                    </IconButton>
                    <Link href="/cart">
                        <IconButton>
                            <Badge badgeContent={2} color="error">
                                <ShoppingCart color="secondary" />
                            </Badge>
                        </IconButton>
                    </Link>
                    <DefaultButton
                        sx={{ mx: 0.5 }}
                        variant="text"
                        color="secondary"
                        onClick={onShowOrHideSidebar}
                    >
                        Menu
                    </DefaultButton>
                </Toolbar>
            </StyledNavbar>
        </AppBar>
    )
}

export default Navbar
