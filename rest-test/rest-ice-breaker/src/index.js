import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import Main from "./main";
import BoundledReducers from "./reducers";

ReactDOM.render(
    <Provider 
        store={
            createStore(BoundledReducers, applyMiddleware(thunk))
        }
    >
        <Main/>
    </Provider>, document.getElementById("root")
)