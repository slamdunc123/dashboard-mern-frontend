import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomersDataGrid from './CustomersDataGrid';
import { getCustomers } from '../../redux/actions/customerActions';

const Customers = () => {
	const dispatch = useDispatch();
	const customers = useSelector(
		(state: any) => state.customerReducer.customers
	);

	const handleEditOnClick = (row) => {
		console.log(row);
	};

	const handleDeleteOnClick = (id) => {
		console.log(id);
	};

	useEffect(() => {
		dispatch(getCustomers());
	}, [dispatch]);

	return (
		<>
			<CustomersDataGrid
				customers={customers}
				handleEditOnClick={handleEditOnClick}
				handleDeleteOnClick={handleDeleteOnClick}
			/>
		</>
	);
};

export default Customers;
