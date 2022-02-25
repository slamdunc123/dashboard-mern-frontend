import React, { FormEvent, ChangeEvent, useState } from 'react';

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
			<h3>{title}</h3>
			<form onSubmit={(e) => handleAddOnClick(e, formData)}>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleInputOnChange}
				/>
				<button type='submit' disabled={formData.name === ''}>
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
