import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Test {
	_id: string;
	name: string;
}

interface TestItemsProps {
	title: string;
}

const TestItems = ({ title }: TestItemsProps) => {
	const [tests, setTests] = useState([]);

	const fetchData = async () => {
		const res = await axios.get(
			'https://full-stack-basic-backend.herokuapp.com/api/tests'
		);
		setTests(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

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
