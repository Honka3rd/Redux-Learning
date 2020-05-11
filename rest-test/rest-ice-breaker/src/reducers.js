import { combineReducers } from "redux";
import { GET_ALL, GET_SINGLE } from "./types";

const students = (state = [], action) => {
	if (action.type === GET_ALL) {
		return action.payload;
	}
	return state;
};

const student = (state = null, action) => {
	if (action.type === GET_SINGLE) {
		return action.payload;
	}
	return state;
}

export default combineReducers({students, student});
