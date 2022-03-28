import { GET_CUSTOMERS, DELETE_CUSTOMER } from './types';
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
