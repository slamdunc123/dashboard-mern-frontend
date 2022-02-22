import {
	GET_TESTS,
	CREATE_TEST,
	DELETE_TEST,
	UPDATE_TEST,
	UPDATE_ISEDITING,
} from '../actions/types';

const initialState = {
	tests: [],
	isEditing: false,
};

export default function testReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_ISEDITING:
			console.log('UPDATE_ISEDITING', payload);
			return {
				...state,
				isEditing: payload,
			};
		case GET_TESTS:
			console.log('GET_TESTS called');
			return {
				...state,
				tests: payload,
			};
		case CREATE_TEST:
			console.log('CREATE_TEST called', payload);
			return {
				...state,
				tests: [...state.tests, payload],
			};
		case DELETE_TEST:
			console.log('DELETE_TEST called', payload);
			return {
				...state,
				tests: state.tests.filter((test) => test._id !== payload),
			};
		case UPDATE_TEST:
			console.log('UPDATE_TEST called', payload);
			const index = state.tests.findIndex(
				(test) => test._id === payload.test._id
			); //finding index of the item
			const newArray = [...state.tests]; //making a new array
			newArray[index].name = payload.test.name; //changing value in the new array
			return {
				...state, //copying the orignal state
				tests: newArray, //reassingning tests to new array
				isEditing: false,
			};

		default:
			return state;
	}
}
