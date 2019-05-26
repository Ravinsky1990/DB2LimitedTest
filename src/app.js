import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import uuid from "uuid";
//Components
import { Provider } from 'react-redux';

import Grid from "./components/UI/Grid"
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import List from "./components/List/List";
import Input from "./components/Input/Input";
//redux
import { createStore, combineReducers, compose } from "redux";
//reducers
import * as reducers from "./store/reducers"

//store
const rootReducer = combineReducers({
    tasks:reducers.task_reducer,
    ui:reducers.ui_reducer,
    filters:reducers.filters_reducer
});
//
const store = createStore(rootReducer);

store.subscribe(()=>{
	console.log(store.getState())
})


const App=()=>{
	return(
		<Provider store={store}>
			<Grid classes={["col-xl-8"]}>
				<Header/>
				<Options/>
			</Grid>
			<Grid classes={["col-xl-10","col-md-12","col-lg-12","col-sm-12"]}>
				<List/>
				<Input/>
			</Grid>
		</Provider>
	)
}



ReactDOM.render(<App/>, document.getElementById('app'));

