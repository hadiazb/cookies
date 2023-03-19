import { ReactElement } from 'react'

// components
import { Typography, Box } from '@/components'

const Custom404View = (): ReactElement => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="calc(100vh - 200px)"
            sx={{ flexDirection: { sm: 'row', xs: 'column' } }}
        >
            <Typography variant="h1" fontSize={80} fontWeight={400}>
                404 |
            </Typography>
            <Typography
                variant="h1"
                fontSize={50}
                fontWeight={200}
                sx={{
                    ml: { sm: 2, xs: 0 },
                    mt: { sm: 0, xs: 3 },
                    textAlign: { sm: 'left', xs: 'center' },
                    fontSize: { sm: 50, xs: 25 },
                }}
            >
                Pagina no encontrada
            </Typography>
        </Box>
    )
}

export default Custom404View
