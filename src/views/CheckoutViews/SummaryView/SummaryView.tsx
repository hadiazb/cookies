import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
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
    Chip,
} from '@/components'

// selectors
import { authSelector, productsSelector, useSelector } from '@/selectors'

// utils
import {
    applyInterestRate,
    countries,
    findCountryByCode,
    productsLength,
    totalPrice,
} from '@/utils'

// actions
import * as ordersActions from '@/store/orders'
import * as cartActions from '@/store/cart'

// store
import { AppDispatch } from '@/store/store'

// interfaces
import { ICartProduct, IOrder, ShippingAddress } from '@/interfaces'

const SummaryView = (): ReactElement => {
    const router = useRouter()
    const dispatch: AppDispatch = useDispatch()

    const [isPosting, setIsPosting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // selectors
    const { location } = useSelector(authSelector)
    const { products, interestRate } = useSelector(productsSelector)

    // lister
    useEffect(() => {
        handlerProductInCart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        handlerAddressIsReady()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const onCreateOrder = (): void => {
        setIsPosting(true)
        if (location) {
            dispatch(
                ordersActions.onGenerateOrder(location, buildBodyRequest(products, location), {
                    onSuccess: (resp) => {
                        router.push(`/orders/${resp._id}`)
                        dispatch(cartActions.onCleanCart())
                    },
                    onErr: (err) => {
                        setErrorMessage(err.message)
                        setIsPosting(false)
                    },
                })
            )
        }
    }

    const handlerProductInCart = (): void => {
        if (products.length === 0) {
            router.push('/')
        }
    }

    const handlerAddressIsReady = (): void => {
        if (!location) {
            router.push('/checkout/address')
        }
    }

    const buildBodyRequest = (products: ICartProduct[], location: ShippingAddress): IOrder => ({
        orderItems: products,
        shippingAddress: location,
        numberOfItems: products.reduce((p, acc) => p + acc.quantity, 0),
        total: totalPrice(products) + applyInterestRate(products, interestRate),
        subTotal: totalPrice(products),
        tax: interestRate,
        isPaid: false,
    })

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
                                        Resumen ({productsLength(products)}{' '}
                                        {productsLength(products) > 1 ? 'productos' : 'producto'})
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
                                                {findCountryByCode(countries, location.country)} -{' '}
                                                {location.city} - {location.zip}
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
                                            type="button"
                                            color="secondary"
                                            fullWidth
                                            variant="outlined"
                                            onClick={onCreateOrder}
                                            disabled={isPosting}
                                        >
                                            Confirmar Orden
                                        </DefaultButton>
                                    </Box>

                                    <Chip
                                        color="error"
                                        label={errorMessage}
                                        sx={{ display: errorMessage ? 'flex' : 'none', mt: 2 }}
                                    />
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
