import { ReactElement } from 'react'

// components
import { Box, Grid, Typography, DefaultInput, DefaultButton } from '@/components'

// styles
import { StyledLoginLink, StyledLoginView } from './loginView-styles'

const LoginView = (): ReactElement => {
    return (
        <StyledLoginView>
            <Box sx={{ width: 350 }} display="flex" flexDirection="column" alignItems="center">
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Typography variant="h1" textAlign="center">
                            Iniciar Sesión
                        </Typography>
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
                        <StyledLoginLink href="/auth/register" passHref>
                            ¿No tienes cuenta?
                        </StyledLoginLink>
                    </Grid>
                </Grid>
            </Box>
        </StyledLoginView>
    )
}

export default LoginView
