import {
	GET_TESTS,
	CREATE_TEST,
	DELETE_TEST,
	UPDATE_TEST,
	UPDATE_ISEDITING,
} from './types';
import axios from 'axios';
import uri from '../../domain';

//get tests

export const getTests = () => async (dispatch) => {
	console.log('getTests action fired');
	try {
		const res = await axios.get(`${uri}/api/tests`);

		dispatch({
			type: GET_TESTS,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};

//create test

export const createTest = (formData) => async (dispatch) => {
	console.log('createTest action fired', formData);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = formData;

	try {
		const res = await axios.post(`${uri}/api/tests`, body, config);

		dispatch({
			type: CREATE_TEST,
			payload: res.data.test,
		});
	} catch (err) {
		console.error(err.error);
	}
};

//delete test by id

export const deleteTest = (id) => async (dispatch) => {
	console.log('deleteTest action fired', id);
	try {
		await axios.delete(`${uri}/api/tests/${id}`);

		dispatch({
			type: DELETE_TEST,
			payload: id,
		});
	} catch (err) {
		console.error(err.error);
	}
};

//update test by id

export const updateTest = (id, formData) => async (dispatch) => {
	console.log('updateTest action fired', id);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = formData;
	try {
		const res = await axios.put(`${uri}/api/tests/${id}`, body, config);
		
		dispatch({
			type: UPDATE_TEST,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};

//update isEditing

export const updateIsEditing = (payload) => (dispatch) => {
	console.log('updateIsEditing action fired', payload);
	dispatch({
		type: UPDATE_ISEDITING,
		payload: payload,
	});
};
