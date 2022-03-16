import { GET_CUSTOMERS } from '../actions/types';

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

		default:
			return state;
	}
}
