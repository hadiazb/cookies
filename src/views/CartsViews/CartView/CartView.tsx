import { ReactElement } from 'react'
import { useDispatch } from 'react-redux'

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

// selectors
import { productsSelector, useSelector } from '@/selectors'

// interfaces
import { ICartProduct } from '@/interfaces'

// store
import { AppDispatch } from '@/store/store'

// action
import * as actions from '@/store/cart'

const CartView = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch()

    const { products, interestRate } = useSelector(productsSelector)

    const onRemove = (product: ICartProduct): void => {
        dispatch(actions.removeToCart(product))
    }

    return (
        <StyledCardView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Carrito
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <CartList editable products={products} onRemove={onRemove} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h2">Orden</Typography>
                            <Divider sx={{ my: 1 }} />

                            <OrderSummary products={products} interestRate={interestRate} />

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
