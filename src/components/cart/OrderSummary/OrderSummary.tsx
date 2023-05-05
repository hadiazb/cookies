import { FC, ReactElement } from 'react'

// styles
import { StyledOrderSummary } from './orderSummary-styles'

// components
import { Grid, Typography } from '@/components'

// interfaces
import { ICartProduct } from '@/interfaces'

// utils
import { format } from '@/utils'

export interface OrderSummaryProps {
    products: ICartProduct[]
    interestRate: number
}

const OrderSummary: FC<OrderSummaryProps> = ({ products, interestRate }): ReactElement => {
    const totalPrice = (products: ICartProduct[]): number =>
        products.reduce((acc, current) => acc + current.quantity * current.price, 0)

    const applyInterestRate = (): number => {
        return (totalPrice(products) * interestRate) / 100
    }

    return (
        <StyledOrderSummary>
            <Grid container>
                <Grid item xs={6}>
                    <Typography fontWeight={500}>No. Productos</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>{products.length} items</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight={500}>SubTotal</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>{`${format(totalPrice(products))}`}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight={500}>Impuestos {`(${interestRate}%)`}</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>{`${format(applyInterestRate())}`}</Typography>
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Total:</Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
                    <Typography variant="subtitle1">{`${format(
                        totalPrice(products) + applyInterestRate()
                    )}`}</Typography>
                </Grid>
            </Grid>
        </StyledOrderSummary>
    )
}

export default OrderSummary
