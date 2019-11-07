import React from "react";
import ReactDOM from "react-dom";
import Songs from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import bundledReducer from "./reducers";

const App = () => {
	return (
		<div>
			<Songs />
		</div>
	);
};

ReactDOM.render(
	<Provider store={createStore(bundledReducer)}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
