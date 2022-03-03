import {
	List,
	ListItem,
	Typography,
	Button,
	ButtonGroup,
	Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Test {
	_id: string;
	name: string;
}

interface TestItemsProps {
	title: string;
	tests: Test[];
	isEditing: boolean;
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
			<Typography variant='h5'>{title}</Typography>
			<List>
				{tests.map((test) => {
					return (
						<ListItem
							key={test._id}
							sx={{
								width: 300,
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'flex-end',
								padding: 1,
							}}
						>
							<Typography>{test.name}</Typography>
							<ButtonGroup>
								<Button
									type='button'
									onClick={() => handleEditOnClick(test)}
									disabled={isEditing}
									size='small'
									color='info'
									variant='text'
								>
									<EditIcon />
								</Button>
								<Button
									type='button'
									onClick={() =>
										handleDeleteOnClick(test._id)
									}
									disabled={isEditing}
									size='small'
									color='error'
									variant='text'
								>
									<DeleteForeverIcon />
								</Button>
							</ButtonGroup>
						</ListItem>
					);
				})}
			</List>
		</>
	);
};

export default TestItems;
