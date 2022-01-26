import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './utils/history';
import { isAuthenticated } from './services/auth';

import Login from './pages/login'
import Dash from './pages/dash';

const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
)

function Routes() {
    return(
        <Router history={ history }>
            <Route path="/login" component={ Login } />
            <PrivateRouter exact path="/" component={ Dash } />
        </Router>
    )
}

export default Routes;