import React from "react";
import { connect } from "react-redux";
import { fetchStudents, fetchSingleStudent } from "./actions";

const main = (props) => {
	console.log(props);

	function fetchSingleStudent(id) {
		props.fetchSingleStudent(id);
	}

	return (
		<div>
			<button onClick={props.fetchAllStudent}>Fetch Students</button>
			<div>
				{props.students.map((student, index) => {
					return (
						<div key={index}>
							<div>firstname: {student ? student.firstName : null}</div>
							<div>lastname: {student ? student.lastName : null}</div>
							<br></br>
						</div>
					);
				})}
			</div>
			<br></br>
			<button onClick={() => fetchSingleStudent("sdfc")}>fetch one</button>
			<div>
				first student: {props.student ? props.student.firstName : null} |{" "}
				{props.student ? props.student.lastName : null}
				<br></br>
				error: {props.student ? props.student.message : null}{" "}
				{props.student ? props.student.status : null}{" "}
				{props.student ? props.student.timestamp : null}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return { students: state.students, student: state.student };
};

const mapActionToProps = () => {
	return { fetchAllStudent: fetchStudents, fetchSingleStudent };
};

export default connect(mapStateToProps, mapActionToProps())(main);
