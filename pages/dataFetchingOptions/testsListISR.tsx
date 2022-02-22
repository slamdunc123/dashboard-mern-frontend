import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

interface Test {
	_id: string;
	name: string;
}

interface TestsListISRProps {
	tests: Test[];
}

const TestsListISR = ({ tests }) => {
	return (
		<>
			<header>
				<h3>Tests List ISR</h3>
			</header>
			{tests.map((test: Test) => {
				return <div key={test._id}>{test.name}</div>;
			})}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const res = await axios.get(
		'https://full-stack-basic-backend.herokuapp.com/api/tests'
	);
	return {
		props: {
			tests: res.data,
		},
		revalidate: 5,
	};
};

export default TestsListISR;
