import * as React from 'react';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

export const ModalType = ({
	modalType,
	selectedRow,
	handleAddConfirm,
	handleEditConfirm,
	handleDeleteConfirm,
	handleCancel,
}) => {
	if (modalType === 'Add') {
		return (
			<>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{modalType}
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Add customer
				</Typography>
				<div
					style={{
						alignSelf: 'flex-end',
						cursor: 'pointer',
					}}
				>
					<CheckCircleIcon
						onClick={() => handleAddConfirm(selectedRow)}
						color='success'
					/>
					<CancelIcon onClick={handleCancel} color='error' />
				</div>
			</>
		);
	} else if (modalType === 'Edit') {
		return (
			<>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{modalType}
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Edit customer
				</Typography>
				<div
					style={{
						alignSelf: 'flex-end',
						cursor: 'pointer',
					}}
				>
					<CheckCircleIcon
						onClick={() => handleEditConfirm(selectedRow)}
						color='success'
					/>
					<CancelIcon onClick={handleCancel} color='error' />
				</div>
			</>
		);
	} else
		return (
			<>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{modalType}
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					{selectedRow
						? `Delete ${selectedRow.name}?`
						: 'No row selected'}
				</Typography>
				<div
					style={{
						alignSelf: 'flex-end',
						cursor: 'pointer',
					}}
				>
					<CheckCircleIcon
						onClick={() => handleDeleteConfirm(selectedRow._id)}
						color='success'
					/>
					<CancelIcon onClick={handleCancel} color='error' />
				</div>
			</>
		);
};

export default function CustomersModal({
	showModal,
	handleCloseModal,
    handleAddConfirm,
    handleEditConfirm,
	handleDeleteConfirm,
	handleCancel,
	modalType,
	selectedRow,
}) {
	return (
		<div>
			{console.log(modalType)}
			<Modal
				open={showModal}
				onClose={handleCloseModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<CloseIcon
						onClick={handleCloseModal}
						style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
					/>

					<ModalType
						modalType={modalType}
						selectedRow={selectedRow}
                        handleAddConfirm={handleAddConfirm}
                        handleEditConfirm={handleEditConfirm}
						handleDeleteConfirm={handleDeleteConfirm}
						handleCancel={handleCancel}
					/>
				</Box>
			</Modal>
		</div>
	);
}
