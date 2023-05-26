import { ReactElement, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ErrorOutline } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { signIn, getProviders, LiteralUnion, ClientSafeProvider } from 'next-auth/react'

// components
import { Box, Grid, Typography, DefaultInput, DefaultButton, Chip, Divider } from '@/components'

// styles
import { StyledLoginLink, StyledLoginView } from './loginView-styles'

// utils
import { isEmail } from '@/utils'

// selectors
import { authSelector, useSelector } from '@/selectors'

// models
import { BuiltInProviderType } from 'next-auth/providers'

export interface FormLogin {
    email: string
    password: string
}

type Providers = Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null

const LoginView = (): ReactElement => {
    const [providers, setProviders] = useState<Providers>(null)
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

    useEffect(() => {
        getProviders().then((providers) => {
            setProviders(providers)
        })
    }, [])

    const finalDestination = (): string => router.query.page?.toString() || '/'

    const onSubmit = async ({ email, password }: FormLogin): Promise<void> => {
        await signIn('credentials', { email, password })
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

                    <Grid item xs={12} display="flex" flexDirection="column" justifyContent="end">
                        <Divider sx={{ width: '100%', mb: 2 }} />
                        {providers &&
                            Object.values(providers)
                                .filter(({ id }) => id !== 'credentials')
                                .map((provider) => (
                                    <DefaultButton
                                        key={provider.id}
                                        color="primary"
                                        fullWidth
                                        sx={{ mb: 1 }}
                                        variant="outlined"
                                        onClick={() => signIn(provider.id)}
                                    >
                                        {provider.name}
                                    </DefaultButton>
                                ))}
                    </Grid>
                </Grid>
            </Box>
        </StyledLoginView>
    )
}

export default LoginView
