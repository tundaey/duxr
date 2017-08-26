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
	UserContainer,
	DuckDetailsContainer,
    LogoutContainer
} from 'containers';

export default function getRoutes(checkAuth, history){
	return (
	    <Router history={history}>
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
					path="/duckdetail/:duckId" 
					component={DuckDetailsContainer}
					onEnter={checkAuth}/>
	            <Route 
	            	path="logout" 
	            	component={LogoutContainer}
	            />
				<Route
					path="/:uid"
					component={UserContainer}
					onEnter={checkAuth} />
	            <IndexRoute 
	            	component={HomeContainer}
	            	onEnter={checkAuth}
	            />
	        </Router>
	    </Router>
	)
}
