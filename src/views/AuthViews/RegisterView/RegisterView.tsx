import { ReactElement } from 'react'

// components
import { Box, DefaultButton, DefaultInput, Grid, Typography } from '@/components'

// styles
import { StyledLoginRegister, StyledRegisterView } from './registerView-styles'

const RegisterView = (): ReactElement => {
    return (
        <StyledRegisterView>
            <Box sx={{ width: 350 }} display="flex" flexDirection="column" alignItems="center">
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Typography variant="h1" textAlign="center">
                            Crear cuenta
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput variant="filled" label="Nombre completo" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput variant="filled" label="Correo" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput variant="filled" label="Contraseña" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultButton variant="contained" fullWidth>
                            Ingresar
                        </DefaultButton>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }} display="flex" justifyContent="end">
                        <StyledLoginRegister href="/auth/login" passHref>
                            ¿Ya tienes cuenta?
                        </StyledLoginRegister>
                    </Grid>
                </Grid>
            </Box>
        </StyledRegisterView>
    )
}

export default RegisterView
