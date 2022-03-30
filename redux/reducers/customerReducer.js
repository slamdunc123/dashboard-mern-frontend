import {
	GET_CUSTOMERS,
	CREATE_CUSTOMER,
	DELETE_CUSTOMER,
} from '../actions/types';

const initialState = {
	customers: [],
};

export default function customerReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_CUSTOMERS:
			console.log('GET_CUSTOMERS', payload);
			return {
				...state,
				customers: payload,
			};
		case CREATE_CUSTOMER:
			console.log('CREATE_CUSTOMER', payload);
			return {
				...state,
				customers: [...state.customers, payload],
			};
		case DELETE_CUSTOMER:
			console.log('DELETE_CUSTOMER', payload);
			return {
				...state,
				customers: state.customers.filter(
					(customer) => customer._id !== payload
				),
			};

		default:
			return state;
	}
}
