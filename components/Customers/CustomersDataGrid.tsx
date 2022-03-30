import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, ButtonGroup, Tooltip } from '@mui/material';

interface Customer { 
    _id: string,
    name: string,
    email: string,
    plan: string
}
interface CustomerDataGridProps {
	customers: Customer[];
	handleEditOnClick: (row: Customer) => void;
	handleDeleteOnClick: (row: Customer) => void;
	isAdminUser: boolean;
}
export default function CustomersDataGrid({
	customers,
	handleEditOnClick,
	handleDeleteOnClick,
	isAdminUser,
}: CustomerDataGridProps) {
	const getCell = (params: { row: Customer; }) => {
		return (
			<>
				<Tooltip
					title={isAdminUser ? '' : 'Admin only'}
					placement='bottom'
					arrow
				>
					<ButtonGroup>
						<Button
							type='button'
							onClick={() => handleEditOnClick(params.row)}
							// disabled={isEditing}
							size='small'
							color='info'
							variant='text'
							disabled={!isAdminUser}
						>
							<EditIcon />
						</Button>
						<Button
							type='button'
							onClick={() => handleDeleteOnClick(params.row)}
							// disabled={isEditing}
							size='small'
							color='error'
							variant='text'
							disabled={!isAdminUser}
						>
							<DeleteForeverIcon />
						</Button>
					</ButtonGroup>
				</Tooltip>
			</>
		);
	};

	const columns: GridColDef[] = [
		{
			field: '_id',
			headerName: 'ID',
		},
		{ field: 'name', headerName: 'Name', width: 200 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'plan', headerName: 'Plan', width: 200 },
		{ field: '', headerName: 'Actions', renderCell: getCell, width: 200 },
	];

	if (customers.length < 1) return <CircularProgress />;

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				getRowId={(row) => row._id}
				rows={customers}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
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
