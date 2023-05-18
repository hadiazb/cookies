import { ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
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

// selectors
import { authSelector, productsSelector, useSelector } from '@/selectors'

const SummaryView = (): ReactElement => {
    const router = useRouter()

    // selectors
    const { location } = useSelector(authSelector)
    const { products, interestRate } = useSelector(productsSelector)

    // lister
    useEffect(() => {
        if (products.length === 0) {
            router.replace('/')
        }
    }, [products, router])

    return (
        <StyledSummaryView>
            {products.length === 0 || location === null ? (
                <Box component="div" />
            ) : (
                <>
                    <Typography variant="h1" sx={{ mb: 2 }}>
                        Resumen de Orden
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <CartList products={products} editable={false} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h2">
                                        Resumen ({products.length}{' '}
                                        {products.length > 1 ? 'productos' : 'producto'})
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />

                                    <Box display="flex" justifyContent="end" sx={{ mb: 1 }}>
                                        <Link href="/checkout/address" passHref>
                                            Editar
                                        </Link>
                                    </Box>

                                    <Typography variant="subtitle1">
                                        Dirección de entrega
                                    </Typography>
                                    {location && (
                                        <>
                                            <Typography>
                                                {location.firstName} {location.lastName}
                                            </Typography>
                                            <Typography>
                                                {location.address} - {location.address2}
                                            </Typography>
                                            <Typography>
                                                {location.country} - {location.city} -{' '}
                                                {location.zip}
                                            </Typography>
                                            <Typography>{location.phone}</Typography>
                                        </>
                                    )}

                                    <Divider sx={{ my: 1 }} />

                                    <Box display="flex" justifyContent="end" sx={{ mb: 1 }}>
                                        <Link href="/cart" passHref>
                                            Editar
                                        </Link>
                                    </Box>

                                    <OrderSummary products={products} interestRate={interestRate} />

                                    <Box sx={{ mt: 3 }}>
                                        <DefaultButton
                                            color="secondary"
                                            fullWidth
                                            variant="outlined"
                                        >
                                            Confirmar Orden
                                        </DefaultButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </>
            )}
        </StyledSummaryView>
    )
}

export default SummaryView
