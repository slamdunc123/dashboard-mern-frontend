import React, { useState, useEffect } from 'react';
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

	const handleCreateTest = (formData: object) => {
		dispatch(createTest(formData));
		dispatch(updateIsEditing(false));
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
	};

	const handleUpdateTest = (formData: object) => {
		dispatch(updateTest(editedTest.id, formData));
		dispatch(updateIsEditing(false));
		handleResetEditedTest();
	};

	const handleResetEditedTest = () => {
		setEditedTest({
			id: '',
			name: '',
		});
	};

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);
	return (
		<>
			<TestItems
				title='Test Items'
				tests={tests}
				isEditing={isEditing}
				handleDeleteOnClick={handleDeleteOnClick}
				handleEditOnClick={handleEditOnClick}
			/>
			{isEditing ? (
				<TestFormUpdate
					title='Update Test'
					editedTest={editedTest}
					handleUpdateTest={handleUpdateTest}
					handleResetEditedTest={handleResetEditedTest}

				/>
			) : (
				<TestFormAdd
					title='Add Test'
					handleCreateTest={handleCreateTest}
				/>
			)}
		</>
	);
};

export default Tests;
