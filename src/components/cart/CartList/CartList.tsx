import { FC, ReactElement } from 'react'
import Link from 'next/link'

// styles
import { StyledCartList } from './cardList-styles'

// components
import {
    Box,
    CardActionArea,
    CardMedia,
    DefaultButton,
    Grid,
    ItemCounter,
    Typography,
} from '@/components'

// models
import { IProduct } from '@/interfaces'

export interface CartListProps {
    products: IProduct[]
    editable?: boolean
}

const CartList: FC<CartListProps> = ({ products, editable = false }): ReactElement => {
    return (
        <StyledCartList>
            {products.map((product) => (
                <Grid container spacing={2} sx={{ mb: 3 }} key={product.slug}>
                    <Grid item xs={3}>
                        <Link href="/product/slug" passHref>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={`/products/${product.images[0]}`}
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Link>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body1">{product.title}</Typography>
                            <Typography variant="body1">
                                Talla: <strong>M</strong>
                            </Typography>
                            {editable ? (
                                <ItemCounter count={4} />
                            ) : (
                                <Typography variant="h5">3 items</Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
                        <Typography variant="subtitle1">$ {product.price}</Typography>
                        {editable && (
                            <DefaultButton variant="text" size="small" color="secondary">
                                Remover
                            </DefaultButton>
                        )}
                    </Grid>
                </Grid>
            ))}
        </StyledCartList>
    )
}

export default CartList
