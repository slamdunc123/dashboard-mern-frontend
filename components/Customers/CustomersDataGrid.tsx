import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';

const columns: GridColDef[] = [
	{
		field: '_id',
		headerName: 'ID',
	},
	{ field: 'first_name', headerName: 'First name' },
];

export default function CustomersDataGrid({ customers }) {
	if (!customers) return <CircularProgress />;

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				getRowId={(row) => row._id}
				rows={customers}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				onRowClick={(row) => console.log(row)}
				sx={{
					boxShadow: 2,
					border: 2,
					borderColor: 'primary.light',
					'& .MuiDataGrid-cell:hover': {
						color: 'primary.main',
					},
				}}
			/>
		</div>
	);
}
