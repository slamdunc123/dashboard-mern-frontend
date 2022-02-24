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
			{console.log('update', formData)}
			<h3>{title}</h3>
			<form>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleOnChange}
				/>
				<button
					type='button'
					onClick={() => handleUpdateOnClick(formData)}
					disabled={formData.name === ''}
				>
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
