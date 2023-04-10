import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

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

    const onShowOrHideSidebar = (): void => {
        dispatch(actions.onShowOrHideSidebar())
    }

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
                            <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
                                Hombres
                            </DefaultButton>
                        </Link>
                        <Link href="/category/women" className="link">
                            <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
                                Mujeres
                            </DefaultButton>
                        </Link>
                        <Link href="/category/boys" as="/category" className="link">
                            <DefaultButton sx={{ mx: 0.5 }} variant="text" color="secondary">
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
