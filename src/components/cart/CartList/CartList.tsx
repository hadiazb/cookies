import { FC, ReactElement } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

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
import { ICartProduct } from '@/interfaces'

// store
import { AppDispatch } from '@/store/store'

// actions
import * as actions from '@/store/cart'

export interface CartListProps {
    products: ICartProduct[]
    editable?: boolean
    onRemove?: (product: ICartProduct) => void
}

const CartList: FC<CartListProps> = ({ products, onRemove, editable = true }): ReactElement => {
    const dispatch: AppDispatch = useDispatch()

    const updateCartQuantity = (product: ICartProduct, newQuantityValue: number): void => {
        dispatch(actions.updateToCart({ ...product, quantity: newQuantityValue }))
    }
    return (
        <StyledCartList>
            {products.map((product, i) => (
                <Grid container spacing={2} sx={{ mb: 3 }} key={`${product.slug}-${i}`}>
                    <Grid item xs={3}>
                        <Link href={`/product/${product.slug}`} passHref>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={`/products/${product.images}`}
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Link>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="body1">{product.title}</Typography>
                            <Typography variant="body1">
                                Talla: <strong>{product.size}</strong>
                            </Typography>
                            {editable ? (
                                <ItemCounter
                                    quantity={product.quantity}
                                    maxValue={10}
                                    updateQuantity={(newValue: number) =>
                                        updateCartQuantity(product, newValue)
                                    }
                                />
                            ) : (
                                <Typography variant="h4" sx={{ mt: 1 }}>
                                    {product.quantity}{' '}
                                    {product.quantity > 1 ? 'productos' : 'producto'}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
                        <Typography variant="subtitle1">
                            $ {product.price * product.quantity}
                        </Typography>
                        {editable && (
                            <DefaultButton
                                variant="text"
                                size="small"
                                color="secondary"
                                onClick={() => {
                                    if (onRemove) {
                                        onRemove(product)
                                    }
                                }}
                            >
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
