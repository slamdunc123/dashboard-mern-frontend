import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

interface Test {
	_id: string;
	name: string;
}

interface TestsListSSGProps {
	tests: Test[];
}

const TestsListSSG = ({ tests }: TestsListSSGProps) => {
	return (
		<>
			<header>
				<h3>Tests List SSG</h3>
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
	};
};

export default TestsListSSG;
