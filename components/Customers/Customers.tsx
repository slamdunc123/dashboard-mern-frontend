import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomersDataGrid from './CustomersDataGrid';
import CustomersModal from './CustomersModal';
import {
	getCustomers,
	deleteCustomer,
	createCustomer,
	updateCustomer,
} from '../../redux/actions/customerActions';
import { AuthContext } from '../../context/authContext';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';

const Customers = () => {
	const { user } = useContext(AuthContext);
	const isAdminUser =
		user &&
		user.app_metadata.roles &&
		user.app_metadata.roles.includes('admin')
			? true
			: false;
	const dispatch = useDispatch();
	const customers = useSelector(
		(state: any) => state.customerReducer.customers
	);

	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState('');
	const [selectedRow, setSelectedRow] = useState();
    const [editedCustomer, setEditedCustomer] = useState({
		id: '',
		name: '',
        email: '',
        plan: '',
	});

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const handleAddOnClick = () => {
		setShowModal(true);
		setModalType('Add');
	};

	const handleAddConfirm = (e, formData) => {
		e.preventDefault();
		dispatch(createCustomer(formData));
		setShowModal(false);
	};

	const handleEditOnClick = (row) => {
		console.log(row);
        setEditedCustomer({
			id: row._id,
			name: row.name,
			email: row.email,
			plan: row.plan,
		});
		setSelectedRow(row);
		setShowModal(true);
		setModalType('Edit');
	};

	const handleEditConfirm = (e, formData) => {
		e.preventDefault();
		dispatch(updateCustomer(editedCustomer.id, formData));
		setShowModal(false);
		console.log('handle edit confirm fired');
	};

	const handleDeleteOnClick = (row) => {
		console.log(row);
		setSelectedRow(row);
		setShowModal(true);
		setModalType('Delete');
	};

	const handleDeleteConfirm = (id) => {
		dispatch(deleteCustomer(id));
		setShowModal(false);
	};

	useEffect(() => {
		dispatch(getCustomers());
	}, [dispatch]);

	return (
		<>
			<CustomersModal
				showModal={showModal}
				handleCloseModal={handleCloseModal}
				handleAddConfirm={handleAddConfirm}
				handleEditConfirm={handleEditConfirm}
				handleDeleteConfirm={handleDeleteConfirm}
				handleCancel={handleCancel}
				modalType={modalType}
				selectedRow={selectedRow}
			/>
			<Button onClick={handleAddOnClick} disabled={!isAdminUser}>
				{<AddBoxIcon color={isAdminUser ? 'primary' : 'disabled'} />}
			</Button>

			<CustomersDataGrid
				customers={customers}
				handleEditOnClick={handleEditOnClick}
				handleDeleteOnClick={handleDeleteOnClick}
				isAdminUser={isAdminUser}
			/>
		</>
	);
};

export default Customers;
