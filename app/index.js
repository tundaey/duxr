/**
 * Created by Tundaey on 5/21/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import { createStore } from 'redux';
import users from 'redux/modules/users';
import { Provider } from 'react-redux'

const store = createStore(users);



ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
    document.getElementById('app')
)