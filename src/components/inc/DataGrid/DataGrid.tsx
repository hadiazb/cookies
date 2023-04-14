import { FC, ReactElement } from 'react'
import { DataGridProps as DataGridPropsMUI } from '@mui/x-data-grid'

// styles
import { StyledDataGrid } from './dataGrid-styles'

export type DataGridProps = DataGridPropsMUI

const DataGrid: FC<DataGridProps> = ({ ...props }): ReactElement => {
    return <StyledDataGrid {...props} />
}

export default DataGrid
