import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
//import { createLogger } from "redux-logger";
import 'tachyons';

import './index.css';
import { searchRobots, requestRobots } from "./Components/redusers";
import App from "./Containers/App";

//const logger = createLogger();
const rootReducers = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
