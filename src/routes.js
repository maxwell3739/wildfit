import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';


export default (
	<Switch>
    <Route exact path="/" component={Homepage} />
	</Switch>
);
