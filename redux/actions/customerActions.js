import { GET_CUSTOMERS, CREATE_CUSTOMER, DELETE_CUSTOMER } from './types';
import axios from 'axios';
import uri from '../../domain';

// get customers

export const getCustomers = () => async (dispatch) => {
	try {
		const res = await axios.get(`${uri}/api/customers`);
		dispatch({
			type: GET_CUSTOMERS,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};

// create customer

export const createCustomer = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = formData;

	try {
		const res = await axios.post(`${uri}/api/customers`, body, config);

		dispatch({
			type: CREATE_CUSTOMER,
			payload: res.data.customer,
		});
	} catch (err) {
		console.error(err.error);
	}
};

// delete customer by id

export const deleteCustomer = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`${uri}/api/customers/${id}`);
		dispatch({
			type: DELETE_CUSTOMER,
			payload: id,
		});
	} catch (err) {
		console.error(err.error);
	}
};
