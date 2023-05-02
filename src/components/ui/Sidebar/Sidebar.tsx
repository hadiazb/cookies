import { FC, ReactElement, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

// components
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from '@/components/inc'

// icons
import {
    AccountCircleOutlined,
    AdminPanelSettings,
    CategoryOutlined,
    ConfirmationNumberOutlined,
    EscalatorWarningOutlined,
    FemaleOutlined,
    LoginOutlined,
    MaleOutlined,
    SearchOutlined,
    VpnKeyOutlined,
} from '@mui/icons-material'

// store
import { AppDispatch } from '../../../store/store'
import * as actions from '../../../store/ui'

// styles
import { StyledSidebar } from './sidebar-styles'

export interface SidebarProps {
    showSidebar: boolean
}

const Sidebar: FC<SidebarProps> = ({ showSidebar }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState('')

    const onShowOrHideSidebar = (): void => {
        dispatch(actions.onShowOrHideSidebar())
    }

    const onSearchTerm = (): void => {
        if (searchTerm.trim().length === 0) {
            return
        }
        router.push(`/search/${searchTerm}`)
        onShowOrHideSidebar()
    }

    return (
        <Drawer
            open={showSidebar}
            onClose={onShowOrHideSidebar}
            anchor="right"
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <StyledSidebar>
                <Box sx={{ width: 300, paddingTop: 5 }}>
                    <List>
                        <ListItem>
                            <Input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => (e.key === 'Enter' ? onSearchTerm() : null)}
                                type="text"
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={onSearchTerm}
                                        >
                                            <SearchOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <AccountCircleOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Perfil'} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <ConfirmationNumberOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Mis Ordenes'} />
                        </ListItem>

                        <ListItem
                            sx={{ display: { xs: '', sm: 'none' } }}
                            onClick={onShowOrHideSidebar}
                        >
                            <ListItemIcon>
                                <MaleOutlined />
                            </ListItemIcon>
                            <Link href="/category/men" className="link">
                                <ListItemText primary={'Hombres'} />
                            </Link>
                        </ListItem>

                        <ListItem
                            sx={{ display: { xs: '', sm: 'none' } }}
                            onClick={onShowOrHideSidebar}
                        >
                            <ListItemIcon>
                                <FemaleOutlined />
                            </ListItemIcon>
                            <Link href="/category/women" className="link">
                                <ListItemText primary={'Mujeres'} />
                            </Link>
                        </ListItem>

                        <ListItem
                            sx={{ display: { xs: '', sm: 'none' } }}
                            onClick={onShowOrHideSidebar}
                        >
                            <ListItemIcon>
                                <EscalatorWarningOutlined />
                            </ListItemIcon>
                            <Link href="/category/kid" className="link">
                                <ListItemText primary={'Niños'} />
                            </Link>
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <VpnKeyOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Ingresar'} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <LoginOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Salir'} />
                        </ListItem>

                        {/* Admin */}
                        <Divider />
                        <ListSubheader>Admin Panel</ListSubheader>

                        <ListItem>
                            <ListItemIcon>
                                <CategoryOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Productos'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ConfirmationNumberOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Ordenes'} />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <AdminPanelSettings />
                            </ListItemIcon>
                            <ListItemText primary={'Usuarios'} />
                        </ListItem>
                    </List>
                </Box>
            </StyledSidebar>
        </Drawer>
    )
}

export default Sidebar
