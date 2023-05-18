import { ReactElement, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ErrorOutline } from '@mui/icons-material'

// components
import { Box, Chip, DefaultButton, DefaultInput, Grid, Typography } from '@/components'

// styles
import { StyledLoginRegister, StyledRegisterView } from './registerView-styles'

// utils
import { isEmail } from '@/utils'

// actions
import * as actions from '@/store/auth'

// store
import { AppDispatch } from '@/store/store'

// selectors
import { authSelector, useSelector } from '@/selectors'

export interface FormRegister {
    name: string
    email: string
    password: string
}

const RegisterView = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter()
    const defaultValuesRef = useRef<FormRegister>({
        name: '',
        email: '',
        password: '',
    })

    const { error, loading } = useSelector(authSelector)

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<FormRegister>({
        defaultValues: defaultValuesRef.current,
    })

    const finalDestination = (): string => router.query.page?.toString() || '/'

    const onSubmit = ({ name, email, password }: FormRegister): void => {
        dispatch(
            actions.onRegister({
                name,
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
        <StyledRegisterView>
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
                            Crear cuenta
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput
                            variant="filled"
                            label="Nombre completo"
                            fullWidth
                            {...register('name', {
                                required: 'Campo requerido',
                                minLength: { value: 2, message: 'Minimo 2 caracteres' },
                            })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput
                            variant="filled"
                            label="Correo"
                            fullWidth
                            {...register('email', {
                                required: 'Campo requerido',
                                validate: isEmail,
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultInput
                            variant="filled"
                            label="Contraseña"
                            fullWidth
                            {...register('password', {
                                required: 'Campo requerido',
                                minLength: { value: 5, message: 'Minimo 6 caracteres' },
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <DefaultButton variant="contained" fullWidth type="submit">
                            {loading ? 'Creando' : 'Crear'}
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
                        <StyledLoginRegister
                            href={`/auth/login?page=${finalDestination()}`}
                            passHref
                        >
                            ¿Ya tienes cuenta?
                        </StyledLoginRegister>
                    </Grid>
                </Grid>
            </Box>
        </StyledRegisterView>
    )
}

export default RegisterView
