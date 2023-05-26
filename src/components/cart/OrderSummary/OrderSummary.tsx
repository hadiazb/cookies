import { FC, ReactElement } from 'react'

// styles
import { StyledOrderSummary } from './orderSummary-styles'

// components
import { Grid, Typography } from '@/components'

// interfaces
import { ICartProduct } from '@/interfaces'

// utils
import { applyInterestRate, format, productsLength, totalPrice } from '@/utils'

export interface OrderSummaryProps {
    products: ICartProduct[]
    interestRate: number
}

const OrderSummary: FC<OrderSummaryProps> = ({ products, interestRate }): ReactElement => {
    return (
        <StyledOrderSummary>
            <Grid container>
                <Grid item xs={6}>
                    <Typography fontWeight={500}>No. Productos</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>{productsLength(products)} items</Typography>
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
                    <Typography>{`${format(
                        applyInterestRate(products, interestRate)
                    )}`}</Typography>
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Total:</Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
                    <Typography variant="subtitle1">{`${format(
                        totalPrice(products) + applyInterestRate(products, interestRate)
                    )}`}</Typography>
                </Grid>
            </Grid>
        </StyledOrderSummary>
    )
}

export default OrderSummary
