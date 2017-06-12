/**
 * Created by Tundaey on 5/21/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from './config/routes';
import { createStore, applyMiddleware, compose } from 'redux';
import users from 'redux/modules/users';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { checkIfAuthed } from 'helpers/auth'

const store = createStore(users, compose(
	applyMiddleware(thunk), 
	window.devToolsExtension? window.devToolsExtension() : (f) =>  f 
	));

function checkAuth(nextState, replace) {
	if( store.getState().isFetching === true){
		return 
	}

	const isAuthed = checkIfAuthed(store);
	const nextPathName = nextState.location.pathname

	if(nextPathName === '/' || nextPathName === '/auth'){
		if(isAuthed === true){
			replace('/feed')
		}
	}else{
		if(isAuthed !== true){
			replace('/auth')
		}
	}
}

ReactDOM.render(
	<Provider store={store}>
		{getRoutes(checkAuth)}
	</Provider>,
    document.getElementById('app')
)