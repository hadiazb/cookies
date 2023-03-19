import { FC, ReactElement } from 'react'
import { LinearProgressProps as LinearProgressPropsMUI } from '@mui/material'

// styles
import { StyledLinearProgress } from './linearProgress-styles'

export type LinearProgressProps = LinearProgressPropsMUI

const LinearProgress: FC<LinearProgressProps> = ({ ...rest }): ReactElement => {
    return <StyledLinearProgress {...rest} />
}

export default LinearProgress
