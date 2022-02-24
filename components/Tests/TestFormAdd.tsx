import React, { ChangeEvent, useState } from 'react';

interface TestFormAddProps {
	title: string;
	handleCreateTest: (formData: object) => void;
	handleCancelOnClick: () => void;
}

const TestFormAdd = ({
	title,
	handleCreateTest,
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

	const handleAddOnClick = () => {
		handleCreateTest(formData);
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
				<button type='button' onClick={handleCancelOnClick}>
					Cancel
				</button>
			</form>
		</>
	);
};

export default TestFormAdd;
