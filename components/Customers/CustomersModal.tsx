import * as React from 'react';
import Box from '@mui/material/Box';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
};

export default function CustomersModal({
	showModal,
	handleCloseModal,
    handleDeleteConfirm,
	modalType,
    selectedRow
}) {
	return (
		<div>
			<Modal
				open={showModal}
				onClose={handleCloseModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<HighlightOffIcon
						onClick={handleCloseModal}
						style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
					/>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
					>
						{modalType}
					</Typography>
					{modalType === 'Edit' ? (
						<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							Edit record
						</Typography>
					) : (
                        <>
						<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							 {selectedRow ? `Delete ${selectedRow.name}?` : 'No row selected'}
						</Typography>
                        <HighlightOffIcon
						onClick={() => handleDeleteConfirm(selectedRow._id)}
						style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
                        />
                        </>
					)}
				</Box>
			</Modal>
		</div>
	);
}
