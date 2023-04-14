import { ReactElement, ReactNode } from 'react'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// styles
import { StyledOrderView, StyledOrderLink } from './historyOrdersView-styles'

// components
import { Typography, Grid, Chip, DataGrid } from '@/components'

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
    },
    {
        field: 'fullname',
        headerName: 'Nombre Completo',
        width: 300,
    },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada la orden',
        width: 200,
        renderCell: (params: GridRenderCellParams): ReactNode =>
            params.row.paid ? (
                <Chip label="Pagada" color="success" variant="outlined" />
            ) : (
                <Chip label="No Pagada" color="error" variant="outlined" />
            ),
    },
    {
        field: 'orden',
        headerName: 'Ver Orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams): ReactNode => (
            <StyledOrderLink passHref key={params.row.id} href={`/orders/${params.row.id}`}>
                Ver Orden
            </StyledOrderLink>
        ),
    },
]

const rows = [
    {
        id: 1,
        paid: true,
        fullname: 'Hugo Andres Diaz',
    },
    {
        id: 2,
        paid: true,
        fullname: 'Maria Jose Diaz',
    },
    {
        id: 3,
        paid: true,
        fullname: 'Ingrith Aguillon',
    },
    {
        id: 4,
        paid: true,
        fullname: 'Jose Rulfo',
    },
    {
        id: 5,
        paid: false,
        fullname: 'Marco Tulio Suesca',
    },
    {
        id: 6,
        paid: true,
        fullname: 'Jose Barbosa',
    },
]

const OrderView = (): ReactElement => {
    return (
        <StyledOrderView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Historial de ordenes
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        rowCount={5}
                    />
                </Grid>
            </Grid>
        </StyledOrderView>
    )
}

export default OrderView
