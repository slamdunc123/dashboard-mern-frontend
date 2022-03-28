import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomersDataGrid from './CustomersDataGrid';
import CustomersModal from './CustomersModal';
import {
	getCustomers,
	deleteCustomer,
} from '../../redux/actions/customerActions';

const Customers = () => {
	const dispatch = useDispatch();
	const customers = useSelector(
		(state: any) => state.customerReducer.customers
	);

	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState('');
	const [selectedRow, setSelectedRow] = useState();

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleEditOnClick = (row) => {
		console.log(row);
		setSelectedRow(row);
		setShowModal(true);
		setModalType('Edit');
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
                handleDeleteConfirm={handleDeleteConfirm}
				modalType={modalType}
				selectedRow={selectedRow}
			/>
			<CustomersDataGrid
				customers={customers}
				handleEditOnClick={handleEditOnClick}
				handleDeleteOnClick={handleDeleteOnClick}
			/>
		</>
	);
};

export default Customers;
