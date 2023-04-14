import { ReactElement } from 'react'

// styles
import { StyledCardView } from './cartView-styles'

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

const CartView = (): ReactElement => {
    return (
        <StyledCardView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Carrito
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <CartList editable products={productsInCart as IProduct[]} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h2">Orden</Typography>
                            <Divider sx={{ my: 1 }} />

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <DefaultButton
                                    color="secondary"
                                    fullWidth
                                    variant="contained"
                                    sx={{ color: 'white', fontWeight: 700 }}
                                >
                                    Checkout
                                </DefaultButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledCardView>
    )
}

export default CartView
