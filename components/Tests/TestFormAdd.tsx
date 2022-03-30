import React, { FormEvent, ChangeEvent, useState } from 'react';
import { Button, ButtonGroup, Typography, TextField, Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TestFormAddProps {
	title: string;
	handleAddOnClick: (e: FormEvent<HTMLFormElement>, formData: object) => void;
	handleCancelOnClick: () => void;
}

const TestFormAdd = ({
	title,
	handleAddOnClick,
	handleCancelOnClick,
}: TestFormAddProps) => {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
	});

	const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		} as any);
	};

	return (
		<>
			<Typography variant='h5'>{title}</Typography>
			<form onSubmit={(e) => handleAddOnClick(e, formData)}>
				<Box
					sx={{
                        width: 300,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        padding: 1,
					}}
				>
					<TextField
						id='standard-basic'
						label='Name'
						variant='standard'
						type='text'
						name='name'
						value={formData.name}
						onChange={handleInputOnChange}
					/>
					<ButtonGroup>
						<Button
							type='submit'
							disabled={formData.name === ''}
							size='small'
							color='info'
							variant='text'
						>
							<CheckCircleIcon />
						</Button>
						<Button
							type='button'
							onClick={handleCancelOnClick}
							size='small'
							color='info'
							variant='text'
						>
							<CancelIcon />
						</Button>
					</ButtonGroup>
				</Box>
			</form>
		</>
	);
};

export default TestFormAdd;
