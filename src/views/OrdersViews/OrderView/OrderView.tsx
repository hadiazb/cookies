/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, ReactElement, useState } from 'react'
import { useRouter } from 'next/router'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'
import { PayPalButtons } from '@paypal/react-paypal-js'

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
    CircularProgress,
} from '@/components'

// selectors
import { productsSelector, useSelector } from '@/selectors'

// utils
import { countries, findCountryByCode, productsLength } from '@/utils'

// interfaces
import { IOrder } from '@/interfaces'

// apis
import { Axios } from '@/apis'

export type OrderResponseBody = {
    id: string
    status: 'COMPLETED' | 'SAVED' | 'APPROVED' | 'VOIDED' | 'PAYER_ACTION_REQUIRED'
}

export interface OrderViewProps {
    id: string
    order: IOrder
}

const OrderView: FC<OrderViewProps> = ({ id, order }): ReactElement => {
    const router = useRouter()
    const [isPaying, setIsPaying] = useState(false)

    const { interestRate } = useSelector(productsSelector)

    const onOrderCompleted = async (details: OrderResponseBody): Promise<void> => {
        if (details.status !== 'COMPLETED') {
            return alert('No hay pago en Paypal')
        }
        setIsPaying(true)
        try {
            await Axios.post(`/orders/pay`, {
                transactionId: details.id,
                orderId: order._id,
            })
            router.reload()
        } catch (error) {
            setIsPaying(false)
            console.error(error)
            alert('Error')
        }
    }

    return (
        <StyledOrderView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Orden: {id}
            </Typography>

            {order.isPaid ? (
                <Chip
                    sx={{ my: 2, p: 1 }}
                    label="Orden ya fue pagada"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined sx={{ width: 18 }} />}
                />
            ) : (
                <Chip
                    sx={{ my: 2, p: 1 }}
                    label="Pendiente de pago"
                    variant="outlined"
                    color="error"
                    icon={<CreditCardOffOutlined sx={{ width: 18 }} />}
                />
            )}

            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <CartList products={order.orderItems} editable={false} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card>
                        <CardContent>
                            <Typography variant="h2">
                                Resumen ({productsLength(order.orderItems)}{' '}
                                {productsLength(order.orderItems) > 1 ? 'productos' : 'producto'})
                            </Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end" sx={{ mb: 1 }} />

                            <>
                                <Typography>
                                    {order.shippingAddress.firstName}{' '}
                                    {order.shippingAddress.lastName}
                                </Typography>
                                <Typography>
                                    {order.shippingAddress.address} -{' '}
                                    {order.shippingAddress.address2}
                                </Typography>
                                <Typography>
                                    {findCountryByCode(countries, order.shippingAddress.country)} -{' '}
                                    {order.shippingAddress.city} - {order.shippingAddress.zip}
                                </Typography>
                                <Typography>{order.shippingAddress.phone}</Typography>
                            </>

                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end" sx={{ mb: 1 }} />

                            <OrderSummary products={order.orderItems} interestRate={interestRate} />

                            <Box sx={{ mt: 3 }} display="flex" flexDirection="column">
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    className="fadeIn"
                                    sx={{ display: isPaying ? 'flex' : 'none' }}
                                >
                                    <CircularProgress />
                                </Box>

                                <Box
                                    flexDirection="column"
                                    sx={{ display: isPaying ? 'none' : 'flex', flex: 1 }}
                                >
                                    {order.isPaid ? (
                                        <Chip
                                            sx={{ my: 2, p: 1 }}
                                            label="Orden ya fue pagada"
                                            variant="outlined"
                                            color="success"
                                            icon={<CreditScoreOutlined sx={{ width: 18 }} />}
                                        />
                                    ) : (
                                        <PayPalButtons
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                value: `${order.total}`,
                                                            },
                                                        },
                                                    ],
                                                })
                                            }}
                                            onApprove={(data, actions) => {
                                                return actions.order!.capture().then((details) => {
                                                    onOrderCompleted(details as OrderResponseBody)
                                                })
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledOrderView>
    )
}

export default OrderView
