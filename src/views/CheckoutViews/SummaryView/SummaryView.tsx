import { ReactElement } from 'react'
import Link from 'next/link'

// styles
import { StyledSummaryView } from './summaryView-styles'

// components
import {
    Typography,
    Grid,
    Card,
    Divider,
    Box,
    DefaultButton,
    CardContent,
    CartList,
    OrderSummary,
} from '@/components'

// database
import { initialData } from '@/db/products'

// models
import { IProduct } from '@/interfaces'

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]]

const SummaryView = (): ReactElement => {
    return (
        <StyledSummaryView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Resumen de Orden
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <CartList products={productsInCart as IProduct[]} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h2">Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end" sx={{ mb: 1 }}>
                                <Link href="/checkout/address" passHref>
                                    Editar
                                </Link>
                            </Box>

                            <Typography variant="subtitle1">Dirección de entrega</Typography>
                            <Typography>Hugo Andres Diaz Bernal</Typography>
                            <Typography>233 Algun lugar</Typography>
                            <Typography>Bogota D.C</Typography>
                            <Typography>5 69589666</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end" sx={{ mb: 1 }}>
                                <Link href="/cart" passHref>
                                    Editar
                                </Link>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <DefaultButton color="secondary" fullWidth variant="outlined">
                                    Confirmar Orden
                                </DefaultButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledSummaryView>
    )
}

export default SummaryView
