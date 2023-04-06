import { ReactElement } from 'react'

// components
import { Typography, Grid, Card, CardActionArea, CardMedia, Box } from '@/components'

// Data Base
import { initialData } from '@/db/products'

const HomeView = (): ReactElement => {
    return (
        <>
            <Typography variant="h1">Tienda</Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
                Todos los productos
            </Typography>
            <Box height={50} />
            <Grid container spacing={4}>
                {initialData.products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.slug}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    image={`products/${product.images[0]}`}
                                    component="img"
                                    alt={product.title}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default HomeView
