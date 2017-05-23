/**
 * Created by Tundaey on 5/21/2017.
 */
import React from 'react';
import { Route, Router, hashHistory, IndexRoute} from 'react-router';
import {
    MainContainer,
    AuthenticateContainer,
    HomeContainer
} from 'containers'

const routes  = (
    <Router history={hashHistory}>
        <Router path="/" component={MainContainer} >
            <Route path="auth" component={AuthenticateContainer}/>
            <IndexRoute component={HomeContainer}/>
        </Router>
    </Router>
)

export default routes;