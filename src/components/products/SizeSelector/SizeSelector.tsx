import { FC, ReactElement } from 'react'

// components
import { Box, DefaultButton } from '@/components'

// models
import { ISize } from '@/interfaces'

export interface SizeSelectorProps {
    sizes: ISize[]
    onSelectedSize?: (size: ISize) => void
    selectedSize?: ISize
}

const SizeSelector: FC<SizeSelectorProps> = ({
    selectedSize,
    sizes,
    onSelectedSize,
}): ReactElement => {
    return (
        <Box sx={{ my: 2 }}>
            {sizes.map((size) => (
                <DefaultButton
                    sx={{ ml: 1 }}
                    key={size}
                    size="small"
                    variant={selectedSize === size ? 'contained' : 'outlined'}
                    color={selectedSize === size ? 'primary' : 'secondary'}
                    onClick={() => {
                        if (onSelectedSize) {
                            onSelectedSize(size)
                        }
                    }}
                >
                    {size}
                </DefaultButton>
            ))}
        </Box>
    )
}

export default SizeSelector
