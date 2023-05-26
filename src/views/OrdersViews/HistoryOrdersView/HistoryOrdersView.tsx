import { FC, ReactElement, ReactNode } from 'react'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// styles
import { StyledOrderView, StyledOrderLink } from './historyOrdersView-styles'

// components
import { Typography, Grid, Chip, DataGrid } from '@/components'

// interfaces
import { IOrder } from '@/interfaces'

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50,
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
        renderCell: (params: GridRenderCellParams<Rows>): ReactNode =>
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
        renderCell: (params: GridRenderCellParams<Rows>): ReactNode => (
            <StyledOrderLink
                passHref
                key={params.row.orderId}
                href={`/orders/${params.row.orderId}`}
            >
                Ver Orden
            </StyledOrderLink>
        ),
    },
]

export interface Rows {
    id: number
    paid: boolean
    fullname: string
    orderId: string | undefined
}

export interface HistoryViewProps {
    orders: IOrder[]
}

const HistoryView: FC<HistoryViewProps> = ({ orders }): ReactElement => {
    const handleBuildRows = (orders: IOrder[]): Rows[] =>
        orders.map((order, idx) => ({
            id: idx + 1,
            paid: order.isPaid,
            fullname: handleBuildFullName(order),
            orderId: order._id,
        }))

    const handleBuildFullName = (order: IOrder): string =>
        `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`

    return (
        <StyledOrderView>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Historial de ordenes
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={handleBuildRows(orders)}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        rowCount={5}
                    />
                </Grid>
            </Grid>
        </StyledOrderView>
    )
}

export default HistoryView
