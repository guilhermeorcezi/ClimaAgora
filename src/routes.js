import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import index from './components/index';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={index} />
			</Switch>
		</Router>
	);
}
