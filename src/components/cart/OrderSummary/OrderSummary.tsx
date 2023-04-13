import { ReactElement } from 'react'

// styles
import { StyledOrderSummary } from './orderSummary-styles'

// components
import { Grid, Typography } from '@/components'

const OrderSummary = (): ReactElement => {
    return (
        <StyledOrderSummary>
            <Grid container>
                <Grid item xs={6}>
                    <Typography fontWeight={500}>No. Productos</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>3 items</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight={500}>SubTotal</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>{`$ ${155.36}`}</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography fontWeight={500}>Impuestos (15%)</Typography>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="end">
                    <Typography>{`$ ${35.12}`}</Typography>
                </Grid>

                <Grid item xs={6} sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Total:</Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 2 }} display="flex" justifyContent="end">
                    <Typography variant="subtitle1">{`$ ${35.12}`}</Typography>
                </Grid>
            </Grid>
        </StyledOrderSummary>
    )
}

export default OrderSummary
