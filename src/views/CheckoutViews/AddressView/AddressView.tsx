import { ReactElement, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'

// components
import {
    DefaultInput,
    Grid,
    Typography,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    Divider,
    FormHelperText,
    Box,
    DefaultButton,
} from '@/components'

// styles
import { StyledAddressView } from './addressView-styles'

// utils
import { countries, setDefaultCountry } from '@/utils'

// store
import { AppDispatch } from '@/store/store'

// actions
import * as authActions from '@/store/auth'

// selectors
import { authSelector, useSelector } from '@/selectors'

export interface FormAddress {
    firstName: string
    lastName: string
    address: string
    address2?: string
    zip: string
    city: string
    country: string
    phone: string
}

const AddressView = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter()

    // selectors
    const { location } = useSelector(authSelector)

    // definitions
    const dividerLine = { display: { xs: 'block' } }
    const defaultValuesRef = useRef({
        firstName: location?.firstName ?? '',
        lastName: location?.lastName ?? '',
        address: location?.address ?? '',
        address2: location?.address2 ?? '',
        zip: location?.zip ?? '',
        city: location?.city ?? '',
        country: setDefaultCountry(countries, location?.country),
        phone: location?.phone ?? '',
    })

    const {
        handleSubmit,
        formState: { errors },
        register,
        getValues,
        watch,
    } = useForm<FormAddress>({
        defaultValues: defaultValuesRef.current,
    })
    watch()

    const onSubmit = (data: FormAddress): void => {
        dispatch(authActions.onSetLocation(data))
        Cookies.set('location', JSON.stringify(data))
        router.push('/checkout/summary')
    }

    return (
        <StyledAddressView>
            <Typography variant="h1" sx={{ mb: 3 }}>
                Dirección
            </Typography>

            <Box onSubmit={handleSubmit(onSubmit)} component="form">
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={dividerLine}>
                        <Divider />
                        <Typography variant="h5" color="primary" fontWeight={700}>
                            Datos personales
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <DefaultInput
                            {...register('firstName', {
                                required: 'Campo requerido',
                            })}
                            label="Nombre"
                            variant="filled"
                            fullWidth
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <DefaultInput
                            {...register('lastName', {
                                required: 'Campo requerido',
                            })}
                            label="Apellido"
                            variant="filled"
                            fullWidth
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                        <DefaultInput
                            {...register('phone', {
                                required: 'Campo requerido',
                            })}
                            label="Telefono"
                            variant="filled"
                            fullWidth
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />
                    </Grid>

                    <Grid item xs={12} sx={dividerLine}>
                        <Divider />
                        <Typography variant="h5" color="primary" fontWeight={700}>
                            Lugares de entrega
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <DefaultInput
                            {...register('address', {
                                required: 'Campo requerido',
                            })}
                            label="Dirección"
                            variant="filled"
                            fullWidth
                            error={!!errors.address}
                            helperText={errors.address?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DefaultInput
                            {...register('address2')}
                            label="Dirección 2 (opcional)"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={dividerLine}>
                        <Divider />
                        <Typography variant="h5" color="primary" fontWeight={700}>
                            País y Ciudad de residencia
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} lg={4}>
                        <FormControl fullWidth variant="filled" error={!!errors.country}>
                            <InputLabel id="country">País</InputLabel>
                            <Select
                                {...register('country', {
                                    required: 'Campo requerido',
                                })}
                                value={getValues('country')}
                                // defaultValue={setDefaultCountry(countries, location?.country)}
                                labelId="country"
                                variant="filled"
                                label="Pais"
                                error={!!errors.country}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.code} value={country.code}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {!!errors.country && (
                                <FormHelperText>{errors.country.message}</FormHelperText>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <DefaultInput
                            {...register('city', {
                                required: 'Campo requerido',
                            })}
                            label="Ciudad"
                            variant="filled"
                            fullWidth
                            error={!!errors.city}
                            helperText={errors.city?.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <DefaultInput
                            {...register('zip', {
                                required: 'Campo requerido',
                            })}
                            label="Codigo Postal"
                            variant="filled"
                            fullWidth
                            error={!!errors.zip}
                            helperText={errors.zip?.message}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 5 }} display="flex" justifyContent="end">
                    <DefaultButton
                        sx={{ color: 'white', fontWeight: 600 }}
                        variant="contained"
                        color="secondary"
                        size="large"
                        type="submit"
                    >
                        Revisar pedido
                    </DefaultButton>
                </Box>
            </Box>
        </StyledAddressView>
    )
}

export default AddressView
