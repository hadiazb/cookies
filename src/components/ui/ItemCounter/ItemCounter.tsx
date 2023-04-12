import { FC, ReactElement } from 'react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

// components
import { Box, IconButton, Typography } from '@/components'

// styles
import { StyledItemCounter } from './itemCounter-styles'

export interface ItemCounterProps {
    count: number
}

const ItemCounter: FC<ItemCounterProps> = ({ count }): ReactElement => {
    return (
        <StyledItemCounter>
            <Box display="flex" alignItems="center">
                <IconButton>
                    <RemoveCircleOutline />
                </IconButton>
                <Typography sx={{ width: 40, textAlign: 'center' }}>{count}</Typography>
                <IconButton>
                    <AddCircleOutline />
                </IconButton>
            </Box>
        </StyledItemCounter>
    )
}

export default ItemCounter
