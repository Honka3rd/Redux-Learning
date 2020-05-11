import { GET_ALL, GET_SINGLE } from "./types";
import Axios from "./axios";

export const fetchStudents = () => {
	return async (dispatch) => {
		const response = await Axios.get("/students", {
            crossDomain: true
        });
		console.log("fetch all", response.data);
		dispatch({ type: GET_ALL, payload: response.data });
	};
};

export const fetchSingleStudent = (id) => {
	return async (dispatch) => {
		Axios.get(`/students/${id}`, {
            crossDomain: true
		})
		.then((response) =>{
			console.log("fetch single", response);
			dispatch({ type: GET_SINGLE, payload: response.data });
		})
		.catch((error) => {
			console.log("error", error.response.data);
			dispatch({ type: GET_SINGLE, payload: error.response.data });
		});
		
	}
}
