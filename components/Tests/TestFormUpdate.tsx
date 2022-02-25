import React, { ChangeEvent, useState, useEffect } from 'react';

interface Test {
	id: string;
	name: string;
}

interface TestFormUpdateProps {
	title: string;
	editedTest: Test;
	handleCancelOnClick: () => void;
	handleUpdateOnClick: (formData: object) => void;
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
			<h3>{title}</h3>
			<form onSubmit={() => handleUpdateOnClick(formData)}>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleOnChange}
				/>
				<button type='submit' disabled={formData.name === ''}>
					Update
				</button>
				<button type='button' onClick={handleCancelOnClick}>
					Cancel
				</button>
			</form>
		</>
	);
};

export default TestFormUpdate;
