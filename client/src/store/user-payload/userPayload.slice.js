import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const createUser = createAsyncThunk(
	'userPayload/createUser',
	async function (login, {rejectWithValue, getState}) {
		try {
			const state = getState();
			const response = await axios.post(`http://localhost:8000/api/auth/registration`, {email: state.userPayload.email, password: state.userPayload.password}, {
				headers: {'Content-Type': 'application/json'}
			}).then(res => console.log(res));
			createAndCheckError(response, "Can't get shops. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const authUser = createAsyncThunk(
	'userPayload/authUser',
	async function (login, {rejectWithValue, getState}) {
		try {
			const state = getState();
			const response = await axios.post(`http://localhost:8000/api/auth/login`, {email: state.userPayload.email, password: state.userPayload.password}, {
				headers: {'Content-Type': 'application/json'}
			}).then(res => login(res.data.token, res.data.userId));
			createAndCheckError(response, "Can't get shops. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const userPayloadSlice = createSlice({
	name: 'userPayload',
	initialState: {
		email: '',
		password: '',
		status: null,
		error: null,
	},
	reducers: {
		setUserPayload: (state, action) => {
			return {
				...state,
				email: action.payload.email,
				password: action.payload.password,
			}
		}
	},
	extraReducers: {
		[authUser.pending]: state => {
			state.status = false;
			state.error = null;
		},
		[authUser.fulfilled]: state => {
			state.status = true;
		},
		[authUser.rejected]: state => {
			state.error = 'rejected';
		},
	}
})

export const {setUserPayload} = userPayloadSlice.actions;

export default userPayloadSlice.reducer;


