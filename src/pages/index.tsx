import { ReactElement, useState } from 'react'

import {
    MainLayout,
    MainStateLayout,
    ViewLayout,
    DefaultButton,
    Typography,
    DefaultModal,
    Popover,
    DefaultInput,
    Divider,
} from '@/components'

const HomePage = (): ReactElement => {
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const handleOpen = (): void => setOpen(true)
    const handleClose = (): void => setOpen(false)

    const onClickPopover = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget)
    }

    const onClosePopover = (): void => {
        setAnchorEl(null)
    }

    const openPopover = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <>
            <DefaultButton color="primary" sx={{ mx: 1 }} onClick={handleOpen}>
                Open Modal
            </DefaultButton>
            <DefaultButton
                aria-describedby={id}
                color="secondary"
                onClick={onClickPopover}
                sx={{ mx: 1 }}
                variant="contained"
            >
                Popover
            </DefaultButton>
            <DefaultButton color="success" sx={{ mx: 1 }} variant="contained">
                Click hire
            </DefaultButton>
            <DefaultButton color="warning" sx={{ mx: 1 }} variant="outlined">
                Click hire
            </DefaultButton>
            <DefaultButton color="error" sx={{ mx: 1 }} variant="outlined">
                Click hire
            </DefaultButton>
            <DefaultButton color="inherit" sx={{ mx: 1 }}>
                Click hire
            </DefaultButton>
            <DefaultButton>Click hire</DefaultButton>
            <Typography variant="h1">H1</Typography>
            <Typography variant="h2">H2</Typography>
            <Typography variant="h3">H3</Typography>
            <Typography variant="h4">H4</Typography>
            <Typography variant="h5">H5</Typography>
            <Typography variant="h6">H6</Typography>
            <Typography variant="h6">H6</Typography>
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <Typography variant="caption">caption</Typography>

            <Divider />
            <DefaultInput
                label="Hola mundo"
                placeholder="Hola mundo"
                helperText="Campo requerido"
                variant="filled"
                error
            />
            <Divider />
            <DefaultInput
                label="Hola mundo"
                helperText="Campo requerido"
                variant="filled"
                color="success"
            />
            <Divider />
            <DefaultInput
                label="Hola mundo"
                helperText="Campo requerido"
                variant="outlined"
                error
            />
            <Divider />
            <DefaultInput
                label="Hola mundo"
                helperText="Campo requerido"
                variant="outlined"
                color="success"
            />
            <Divider />
            <DefaultInput
                label="Hola mundo"
                helperText="Campo requerido"
                variant="standard"
                error
            />
            <Divider />

            <Popover
                id={id}
                open={openPopover}
                anchorEl={anchorEl}
                onClose={onClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 1 }}>Popover</Typography>
            </Popover>
            <DefaultModal open={open} onClose={handleClose} disableBackdropClick>
                <>
                    <Typography variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <DefaultButton
                        color="secondary"
                        sx={{ my: 1 }}
                        variant="contained"
                        onClick={handleClose}
                    >
                        Close
                    </DefaultButton>
                </>
            </DefaultModal>
        </>
    )
}

export default HomePage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout title="Style Guy" description="Style Guy description">
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

HomePage.getLayout = getLayout
