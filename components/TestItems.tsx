import React, { useEffect } from 'react';
import { getTests } from '../redux/actions/testActions';
import { useDispatch, useSelector } from 'react-redux';

interface Test {
	_id: string;
	name: string;
}

interface TestItemsProps {
	title: string;
}

const TestItems = ({ title }: TestItemsProps) => {
	const dispatch = useDispatch();
	const tests = useSelector((state: any) => state.testReducer.tests);

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);

	return (
		<>
			<h3>{title}</h3>
			{tests.map((test: Test) => {
				return <div key={test._id}>{test.name}</div>;
			})}
		</>
	);
};

export default TestItems;
