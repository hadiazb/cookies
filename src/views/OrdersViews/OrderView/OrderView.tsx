import { ReactElement } from 'react'
import Link from 'next/link'
import { /*CreditCardOffOutlined, */ CreditScoreOutlined } from '@mui/icons-material'

// styles
import { StyledOrderView } from './orderView-styles'

// components
import {
    Typography,
    Grid,
    Card,
    Divider,
    Box,
    CardContent,
    CartList,
    OrderSummary,
    Chip,
} from '@/components'

// selectors
import { productsSelector, useSelector } from '@/selectors'

const OrderView = (): ReactElement => {
    const { products, interestRate } = useSelector(productsSelector)

    return (
        <StyledOrderView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Orden: sjaghdjask
            </Typography>

            {/* <Chip
                sx={{ my: 2, p: 1 }}
                label="Pendiente de pago"
                variant="outlined"
                color="error"
                icon={<CreditCardOffOutlined sx={{ width: 18 }} />}
            /> */}

            <Chip
                sx={{ my: 2, p: 1 }}
                label="Orden ya fue pagada"
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlined sx={{ width: 18 }} />}
            />

            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <CartList products={products} />
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

                            <OrderSummary products={products} interestRate={interestRate} />

                            <Box sx={{ mt: 3 }}>
                                <Typography variant="h1">Pagar</Typography>
                                <Chip
                                    sx={{ my: 2, p: 1 }}
                                    label="Orden ya fue pagada"
                                    variant="outlined"
                                    color="success"
                                    icon={<CreditScoreOutlined sx={{ width: 18 }} />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledOrderView>
    )
}

export default OrderView
