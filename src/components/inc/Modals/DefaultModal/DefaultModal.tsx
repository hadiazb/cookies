/* eslint-disable @typescript-eslint/ban-types */
import { FC, ReactElement } from 'react'
import { ModalProps as ModalPropsMUI } from '@mui/material'

// styles
import { StyledModal, StyledBox } from './model-styles'

export interface DefaultModalProps extends ModalPropsMUI {
    disableBackdropClick?: boolean
}

const DefaultModal: FC<DefaultModalProps> = ({
    children,
    onClose,
    disableBackdropClick,
    ...rest
}): ReactElement => {
    const _onClose = (_e: {}, r: 'backdropClick' | 'escapeKeyDown'): void => {
        if (onClose) {
            if (r && r === 'backdropClick' && disableBackdropClick) return
            onClose(_e, r)
        }
    }
    return (
        <StyledModal className={rest.className} onClose={_onClose} {...rest}>
            <StyledBox>{children}</StyledBox>
        </StyledModal>
    )
}

export default DefaultModal
