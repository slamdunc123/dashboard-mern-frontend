import React, { ChangeEvent, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

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
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		email: '',
		plan: '',
	});

	const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		} as any);
	};

	useEffect(() => {
		if (modalType === 'Edit') setFormData(selectedRow);
	}, [modalType, selectedRow]);

	if (modalType === 'Add') {
		return (
			<>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Add customer
				</Typography>
				<form onSubmit={(e) => handleAddConfirm(e, formData)}>
					<Box
						sx={{
							width: 300,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
							padding: 1,
						}}
					>
						<TextField
							id='name'
							label='Name'
							variant='standard'
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputOnChange}
						/>
						<TextField
							id='email'
							label='Email'
							variant='standard'
							type='text'
							name='email'
							value={formData.email}
							onChange={handleInputOnChange}
						/>
						<TextField
							id='plan'
							label='Plan'
							variant='standard'
							type='text'
							name='plan'
							value={formData.plan}
							onChange={handleInputOnChange}
						/>
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Button type='submit'>
							<CheckCircleIcon color='success' />
						</Button>
						<Button type='button'>
							<CancelIcon onClick={handleCancel} color='error' />
						</Button>
					</Box>
				</form>
			</>
		);
	} else if (modalType === 'Edit') {
		return (
			<>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Edit customer
				</Typography>
				<form onSubmit={(e) => handleEditConfirm(e, formData)}>
					<Box
						sx={{
							width: 300,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
							padding: 1,
						}}
					>
						<TextField
							id='name'
							label='Name'
							variant='standard'
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputOnChange}
						/>
						<TextField
							id='email'
							label='Email'
							variant='standard'
							type='text'
							name='email'
							value={formData.email}
							onChange={handleInputOnChange}
						/>
						<TextField
							id='plan'
							label='Plan'
							variant='standard'
							type='text'
							name='plan'
							value={formData.plan}
							onChange={handleInputOnChange}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Button type='submit'>
							<CheckCircleIcon color='success' />
						</Button>
						<Button type='button'>
							<CancelIcon onClick={handleCancel} color='error' />
						</Button>
					</Box>
				</form>
			</>
		);
	} else
		return (
			<>
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
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Button type='submit'>
							<CheckCircleIcon
								onClick={() =>
									handleDeleteConfirm(selectedRow._id)
								}
								color='success'
							/>
						</Button>
						<Button type='button'>
							<CancelIcon onClick={handleCancel} color='error' />
						</Button>
					</Box>
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
