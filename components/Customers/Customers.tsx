import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomersDataGrid from './CustomersDataGrid';
import CustomersModal from './CustomersModal';
import {
	getCustomers,
	deleteCustomer,
} from '../../redux/actions/customerActions';
import { AuthContext } from '../../context/authContext';


const Customers = () => {
    const {user} = useContext(AuthContext)
    const isAdminUser = user && user.app_metadata.roles[0].includes('admin') ? true : false
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
                isAdminUser={isAdminUser}
			/>
		</>
	);
};

export default Customers;
