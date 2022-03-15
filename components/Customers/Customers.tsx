import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uri from '../../domain';
import CustomersDataGrid from './CustomersDataGrid';

const Customers = () => {
	const [customers, setCustomers] = useState();

	const getCustomers = async () => {
		const res = await axios.get(`${uri}/api/customers`);
		console.log(res.data);
		setCustomers(res.data);
	};

	useEffect(() => {
		getCustomers();
	}, []);

	return (
		<>
			{console.log(customers)}
			
			<CustomersDataGrid customers={customers}/>
			
		</>
	);
};

export default Customers;
