import { ReactElement } from 'react'
import Link from 'next/link'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'

// components
import { Box, Typography } from '@/components'

const EmptyView = (): ReactElement => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 200px)"
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
            <Box>
                <Typography>Su carrito esta vació</Typography>
                <Link href="/" passHref style={{ textDecoration: 'none' }}>
                    <Typography variant="h1" color="secondary" fontSize={30}>
                        Regresar
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default EmptyView
