import React, { FormEvent, useState, useEffect } from 'react';
import TestFormAdd from './TestFormAdd';
import TestFormUpdate from './TestFormUpdate';
import TestItems from './TestItems';
import {
	getTests,
	createTest,
	updateIsEditing,
	deleteTest,
	updateTest,
} from '../../redux/actions/testActions';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface Test {
	_id: string;
	name: string;
}

const Tests = () => {
	const dispatch = useDispatch();
	const tests = useSelector((state: any) => state.testReducer.tests);
	const isEditing = useSelector((state: any) => state.testReducer.isEditing);
	const [editedTest, setEditedTest] = useState({
		id: '',
		name: '',
	});
	const [showForm, setShowForm] = useState(false);

	const handleAddOnClick = (
		e: FormEvent<HTMLFormElement>,
		formData: object
	) => {
		e.preventDefault();
		dispatch(createTest(formData));
		dispatch(updateIsEditing(false));
		setShowForm(false);
	};

	const handleDeleteOnClick = (id: string) => {
		dispatch(deleteTest(id));
	};

	const handleEditOnClick = (test: Test) => {
		dispatch(updateIsEditing(true));
		setEditedTest({
			id: test._id,
			name: test.name,
		});
		setShowForm(true);
	};

	const handleUpdateOnClick = (
		e: FormEvent<HTMLFormElement>,
		formData: object
	) => {
		e.preventDefault();
		dispatch(updateTest(editedTest.id, formData));
		dispatch(updateIsEditing(false));
		setShowForm(false);
	};

	const handleCancelOnClick = () => {
		dispatch(updateIsEditing(false));
		setEditedTest({
			id: '',
			name: '',
		});
		setShowForm(false);
	};

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);

	return (
		<>
			{!showForm && (
				<Button onClick={() => setShowForm(true)}><AddCircleIcon /></Button>
			)}
			{!showForm ? (
				<TestItems
					title='Test Items'
					tests={tests}
					isEditing={isEditing}
					handleDeleteOnClick={handleDeleteOnClick}
					handleEditOnClick={handleEditOnClick}
				/>
                
			) : (
				<>
					{isEditing ? (
						<TestFormUpdate
							title='Update Test'
							editedTest={editedTest}
							handleUpdateOnClick={handleUpdateOnClick}
							handleCancelOnClick={handleCancelOnClick}
						/>
					) : (
						<TestFormAdd
							title='Add Test'
							handleAddOnClick={handleAddOnClick}
							handleCancelOnClick={handleCancelOnClick}
						/>
					)}
				</>
			)}
		</>
	);
};

export default Tests;
