import { FC, ReactElement } from 'react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

// components
import { Box, IconButton, Typography } from '@/components'

// styles
import { StyledItemCounter } from './itemCounter-styles'

export interface ItemCounterProps {
    quantity: number
    maxValue: number
    updateQuantity: (newValue: number) => void
}

const ItemCounter: FC<ItemCounterProps> = ({
    quantity,
    maxValue,
    updateQuantity,
}): ReactElement => {
    const addOrRemove = (value: number): void => {
        if (value === -1) {
            if (quantity === 1) return
            return updateQuantity(quantity - 1)
        }
        if (quantity >= maxValue) return
        updateQuantity(quantity + 1)
    }

    return (
        <StyledItemCounter>
            <Box display="flex" alignItems="center">
                <IconButton onClick={() => addOrRemove(-1)}>
                    <RemoveCircleOutline />
                </IconButton>
                <Typography sx={{ width: 40, textAlign: 'center' }}>{quantity}</Typography>
                <IconButton onClick={() => addOrRemove(+1)}>
                    <AddCircleOutline />
                </IconButton>
            </Box>
        </StyledItemCounter>
    )
}

export default ItemCounter
