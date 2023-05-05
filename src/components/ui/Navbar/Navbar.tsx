import { ReactElement, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { SearchOutlined, ShoppingCart, ClearOutlined } from '@mui/icons-material'

// components
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    DefaultButton,
    IconButton,
    Badge,
    Input,
    InputAdornment,
} from '@/components/inc'

// styles
import { StyledNavbar } from './navbar-styles'

// store
import { AppDispatch } from '../../../store/store'
import * as actions from '../../../store/ui'

// selectors
import { productsSelector, useSelector } from '@/selectors'

const Navbar = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const { pathname, push } = useRouter()

    const { products } = useSelector(productsSelector)

    const onShowOrHideSidebar = (): void => {
        dispatch(actions.onShowOrHideSidebar())
    }

    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onSearchTerm = (): void => {
        if (searchTerm.trim().length === 0) {
            return
        }
        push(`/search/${searchTerm}`)
    }

    const productsLength = (): number => {
        return products.reduce((p, acc) => p + acc.quantity, 0)
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
                    <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}>
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

                    {isSearchVisible ? (
                        <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
                            type="text"
                            placeholder="Buscar..."
                            sx={{
                                color: (theme) => theme.palette.secondary.main,
                                display: { xs: 'none', sm: 'flex' },
                            }}
                            color="secondary"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        color="secondary"
                                        onClick={() => setIsSearchVisible(false)}
                                    >
                                        <ClearOutlined color="secondary" />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    ) : (
                        <IconButton
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                            }}
                            onClick={() => setIsSearchVisible(true)}
                        >
                            <SearchOutlined color="secondary" />
                        </IconButton>
                    )}

                    <IconButton
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                        onClick={onShowOrHideSidebar}
                    >
                        <SearchOutlined color="secondary" />
                    </IconButton>
                    <Link href="/cart">
                        <IconButton>
                            <Badge
                                badgeContent={productsLength() > 9 ? '+9' : productsLength()}
                                color="error"
                            >
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
