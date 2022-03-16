import { GET_CUSTOMERS } from './types';
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
