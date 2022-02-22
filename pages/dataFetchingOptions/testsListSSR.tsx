import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface Test {
	_id: string;
	name: string;
}

interface TestsListSSRProps {
	tests: Test[];
}

const TestsListSSR = ({ tests }: TestsListSSRProps) => {
	return (
		<>
			<header>
				<h3>Tests List SSR</h3>
			</header>
			{tests.map((test: Test) => {
				return <div key={test._id}>{test.name}</div>;
			})}
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await axios.get(
		'https://full-stack-basic-backend.herokuapp.com/api/tests'
	);
	return {
		props: { tests: res.data },
	};
};

export default TestsListSSR;
