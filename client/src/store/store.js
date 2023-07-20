import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userPayloadReducer from './user-payload/userPayload.slice.js';

const reducers = combineReducers({
	userPayload: userPayloadReducer,
});

export const store = configureStore({
	reducer: reducers,
});