import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import Payments from './components/payments';


export default (
	<Switch>
    <Route exact path="/home" component={Homepage} />
		<Route exact path="/payments" component={Payments} />
	</Switch>
);
