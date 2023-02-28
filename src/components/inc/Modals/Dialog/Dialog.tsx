import { FC, ReactElement } from 'react'
import { DialogProps as DialogPropsMUI } from '@mui/material'

// styles
import { StyledDialog } from './dialog-styles'

export interface DialogProps extends DialogPropsMUI {
    disableBackdropClick?: boolean
}

const Dialog: FC<DialogProps> = ({ children, ...rest }): ReactElement => {
    return <StyledDialog {...rest}>{children}</StyledDialog>
}

export default Dialog
