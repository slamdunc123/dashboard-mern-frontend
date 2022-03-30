import {
	GET_CUSTOMERS,
	CREATE_CUSTOMER,
	DELETE_CUSTOMER,
	UPDATE_CUSTOMER,
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
		case UPDATE_CUSTOMER:
			console.log('UPDATE_CUSTOMER', payload);
			const index = state.customers.findIndex(
				(customer) => customer._id === payload.customer._id
			); //finding index of the item
			const updatedCustomers = [...state.customers]; //make new array
			updatedCustomers[index].name = payload.customer.name; //change values in the new array
			updatedCustomers[index].email = payload.customer.email;
			updatedCustomers[index].plan = payload.customer.plan;
			return {
				...state,
				customers: updatedCustomers,
			};

		default:
			return state;
	}
}
