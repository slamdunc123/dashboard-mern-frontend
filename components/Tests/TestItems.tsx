interface Test {
	_id: string;
	name: string;
}

interface TestItemsProps {
	title: string;
	tests: Test[];
    isEditing: boolean,
	handleDeleteOnClick: (id: string) => void;
	handleEditOnClick: (test: Test) => void;
}

const TestItems = ({
	title,
	tests,
    isEditing,
	handleDeleteOnClick,
	handleEditOnClick,
}: TestItemsProps) => {
	return (
		<>
			<h3>{title}</h3>
			<ul>
				{tests.map((test: Test) => {
					return (
						<div key={test._id}>
							<li>{test.name}</li>
							<button
								type='button'
								onClick={() => handleDeleteOnClick(test._id)}
								disabled={isEditing}
							>
								delete
							</button>
							<button
								type='button'
								onClick={() => handleEditOnClick(test)}
								disabled={isEditing}
							>
								edit
							</button>
						</div>
					);
				})}
			</ul>
		</>
	);
};

export default TestItems;
