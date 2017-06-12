/**
 * Created by Tundaey on 5/21/2017.
 */
import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';
import {
    MainContainer,
    AuthenticateContainer,
    HomeContainer,
    FeedContainer,
    LogoutContainer
} from 'containers';

export default function getRoutes(checkAuth){
	return (
	    <Router history={hashHistory}>
	        <Router path="/" component={MainContainer} >
	            <Route 
	            	path="auth" 
	            	component={AuthenticateContainer}
	            	onEnter={checkAuth}
	            />
	            <Route 
	            	path="feed" 
	            	component={FeedContainer}
	            	onEnter={checkAuth}
	            />
	            <Route 
	            	path="logout" 
	            	component={LogoutContainer}
	            />
	            <IndexRoute 
	            	component={HomeContainer}
	            	onEnter={checkAuth}
	            />
	        </Router>
	    </Router>
	)
}
