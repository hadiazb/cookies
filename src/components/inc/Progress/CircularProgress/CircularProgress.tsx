import { FC, ReactElement } from 'react'
import { CircularProgressProps as CircularProgressPropsMUI } from '@mui/material'

// styles
import { StyledCircularProgress } from './circularProgress-styles'

export type CircularProgressProps = CircularProgressPropsMUI

const CircularProgress: FC<CircularProgressProps> = ({ ...rest }): ReactElement => {
    return <StyledCircularProgress {...rest} />
}

export default CircularProgress
