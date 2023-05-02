import { ReactElement } from 'react'

// components
import { Box, CircularProgress, Typography } from '@/components'

const FullScreenLoading = (): ReactElement => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            height="calc(100vh - 200px)"
        >
            <Typography sx={{ mb: 3 }} variant="h2" fontWeight={200} fontSize={20}>
                Cargando...
            </Typography>
            <CircularProgress thickness={3} />
        </Box>
    )
}

export default FullScreenLoading
