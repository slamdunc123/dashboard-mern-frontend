import React, { ChangeEvent, MouseEvent, useState } from 'react';

interface TestFormAddProps {
	title: string;
	handleCreateTest: (formData: object) => void;
}

const TestFormAdd = ({
	title,
	handleCreateTest,
}: TestFormAddProps) => {
	const [formData, setFormData] = useState({
		name: '',
	});

	const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			[e.target.name]: e.target.value,
		} as any);
	};

	const handleAddOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleCreateTest(formData);
		setFormData({
			name: '',
		});
	};

	const handleCancelOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setFormData({
			name: '',
		});
	};
	return (
		<>
			<h3>{title}</h3>
			<form>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleInputOnChange}
				/>
				<button
					type='button'
					onClick={handleAddOnClick}
					disabled={formData.name === ''}
				>
					Add
				</button>
				<button
					type='button'
					onClick={handleCancelOnClick}
					disabled={formData.name === ''}
				>
					Cancel
				</button>
			</form>
		</>
	);
};

export default TestFormAdd;
