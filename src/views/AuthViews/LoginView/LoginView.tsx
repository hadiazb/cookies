import { ReactElement, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ErrorOutline } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

// components
import { Box, Grid, Typography, DefaultInput, DefaultButton, Chip } from '@/components'

// styles
import { StyledLoginLink, StyledLoginView } from './loginView-styles'

// utils
import { isEmail } from '@/utils'

// actions
import * as actions from '@/store/auth'
import { AppDispatch } from '@/store/store'

// selectors
import { authSelector, useSelector } from '@/selectors'

export interface FormLogin {
    email: string
    password: string
}

const LoginView = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter()
    const defaultValuesRef = useRef({
        email: '',
        password: '',
    })

    const { error, loading } = useSelector(authSelector)

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<FormLogin>({
        defaultValues: defaultValuesRef.current,
    })

    const finalDestination = (): string => router.query.page?.toString() || '/'

    const onSubmit = ({ email, password }: FormLogin): void => {
        dispatch(
            actions.onLogin({
                email,
                password,
                onSuccess: () => {
                    const destination = finalDestination()
                    router.push(destination)
                },
                onErr: () => {
                    setTimeout(() => {
                        dispatch(actions.onReset())
                    }, 3000)
                },
            })
        )
    }

    return (
        <StyledLoginView>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{ width: 350 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Typography variant="h1" textAlign="center">
                            Iniciar Sesión
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput
                            variant="filled"
                            label="Correo"
                            fullWidth
                            error={!!errors.email}
                            {...register('email', {
                                required: 'Campo requerido',
                                validate: isEmail,
                            })}
                            helperText={errors.email?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput
                            variant="filled"
                            label="Contraseña"
                            fullWidth
                            error={!!errors.password}
                            {...register('password', {
                                required: 'Campo requerido',
                                minLength: { value: 5, message: 'Minimo 6 caracteres' },
                            })}
                            helperText={errors.password?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultButton variant="contained" fullWidth type="submit">
                            {loading ? 'enviando...' : 'Ingresar'}
                        </DefaultButton>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3, display: error ? 'block' : 'none' }}>
                        <Chip
                            label={error}
                            color="error"
                            icon={<ErrorOutline sx={{ mr: '10px !important' }} />}
                            sx={{ display: 'flex' }}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }} display="flex" justifyContent="end">
                        <StyledLoginLink
                            href={`/auth/register?page=${finalDestination()}`}
                            passHref
                        >
                            ¿No tienes cuenta?
                        </StyledLoginLink>
                    </Grid>
                </Grid>
            </Box>
        </StyledLoginView>
    )
}

export default LoginView
