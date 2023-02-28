import { FC, ReactElement } from 'react'
import { ChipProps as ChipPropsMUI } from '@mui/material'

// styles
import { StyledChip } from './chip-styles'

export type ChipProps = ChipPropsMUI

const Chip: FC<ChipProps> = ({ ...rest }): ReactElement => {
    return <StyledChip {...rest} />
}

export default Chip
