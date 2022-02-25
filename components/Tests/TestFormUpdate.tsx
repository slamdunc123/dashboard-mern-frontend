import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { Button, ButtonGroup, Typography, TextField, Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Test {
	id: string;
	name: string;
}

interface TestFormUpdateProps {
	title: string;
	editedTest: Test;
	handleCancelOnClick: () => void;
	handleUpdateOnClick: (
		e: FormEvent<HTMLFormElement>,
		formData: object
	) => void;
}

const TestFormUpdate = ({
	title,
	editedTest,
	handleUpdateOnClick,
	handleCancelOnClick,
}: TestFormUpdateProps) => {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
	});

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value } as any);
	};

	useEffect(() => {
		setFormData(editedTest);
	}, [editedTest]);

	return (
		<>
			<Typography variant='h5'>{title}</Typography>
			<form onSubmit={(e) => handleUpdateOnClick(e, formData)}>
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
						onChange={handleOnChange}
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

export default TestFormUpdate;
