import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const createAndCheckError = (response, message) => {
	if (!response.status === 200) {
		throw new Error(message);
	}
};

export const createUser = createAsyncThunk(
	'userPayload/createUser',
	async function (_, {rejectWithValue, getState}) {
		try {
			const state = getState();
			const response = await axios.post('http://localhost:8000/api/auth/registration', {...state.userPayload}, {
				headers: {'Content-Type': 'application/json'}
			}).then(res => console.log(res));
			createAndCheckError(response, "Can't get shops. Server error");
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
)

const userPayloadSlice = createSlice({
	name: 'userPayload',
	initialState: {
		email: '',
		password: '',
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
})

export const {setUserPayload} = userPayloadSlice.actions;

export default userPayloadSlice.reducer;


