import { ReactElement } from 'react'

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

const AddressView = (): ReactElement => {
    const dividerLine = { display: { xs: 'block' } }
    return (
        <StyledAddressView>
            <Typography variant="h1" sx={{ mb: 3 }}>
                Dirección
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sx={dividerLine}>
                    <Divider />
                    <Typography variant="h5" color="primary" fontWeight={700}>
                        Datos personales
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <DefaultInput
                        label="Nombre"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <DefaultInput
                        label="Apellido"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <DefaultInput
                        label="Telefono"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
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
                        label="Dirección"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DefaultInput
                        label="Dirección 2 (opcional)"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
                    />
                </Grid>

                <Grid item xs={12} sx={dividerLine}>
                    <Divider />
                    <Typography variant="h5" color="primary" fontWeight={700}>
                        País y Ciudad de residencia
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} lg={4}>
                    <FormControl fullWidth variant="filled" error>
                        <InputLabel id="country">País</InputLabel>
                        <Select labelId="country" variant="filled" label="Pais" error>
                            <MenuItem value={1}>Colombia</MenuItem>
                            <MenuItem value={2}>Peru</MenuItem>
                            <MenuItem value={3}>Mexico</MenuItem>
                        </Select>
                        <FormHelperText>Campo Obligatorio</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <DefaultInput
                        label="Ciudad"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <DefaultInput
                        label="Codigo Postal"
                        variant="filled"
                        fullWidth
                        error
                        helperText="Campo obligatorio"
                    />
                </Grid>
            </Grid>

            <Box sx={{ mt: 5 }} display="flex" justifyContent="end">
                <DefaultButton
                    variant="contained"
                    sx={{ color: 'white', fontWeight: 600 }}
                    color="secondary"
                    size="large"
                >
                    Revisar pedido
                </DefaultButton>
            </Box>
        </StyledAddressView>
    )
}

export default AddressView
