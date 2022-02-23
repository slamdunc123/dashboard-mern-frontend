import React, { MouseEvent, ChangeEvent, useState, useEffect } from 'react';
import { updateIsEditing } from '../../redux/actions/testActions';
import { useDispatch } from 'react-redux';

interface Test {
    id: string,
    name: string
}

interface TestFormUpdateProps {
	title: string;
    editedTest: Test,
	handleUpdateTest: (formData: object) => void;
    handleResetEditedTest: () => void
}

const TestFormUpdate = ({ title, editedTest, handleUpdateTest, handleResetEditedTest }: TestFormUpdateProps) => {
    const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		name: '',
	});

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ [e.target.name]: e.target.value } as any);
	};

	const handleUpdateOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleUpdateTest(formData);
		setFormData({ name: '' });
	};

	const handleCancelOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(updateIsEditing(false));
        handleResetEditedTest()
	};

    useEffect(() => {
    setFormData({
        name: editedTest.name
    })
    
    }, [editedTest.name])
    
	return (
		<>
			<h3>{title}</h3>
			<form>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleOnChange}
				/>
				<button type='button' onClick={handleUpdateOnClick}>
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
