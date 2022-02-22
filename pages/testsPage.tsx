import React from 'react';
import TestFormAdd from '../components/TestFormAdd';
import TestFormUpdate from '../components/TestFormUpdate';
import TestItems from '../components/TestItems';

const TestsPage = () => {
	return (
		<>
			<TestItems title='Test Items' />
			<TestFormAdd title='Add Test' />
			<TestFormUpdate title='Update Test' />
		</>
	);
};

export default TestsPage;
