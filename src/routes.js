import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/Index';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Index} />
			</Switch>
		</Router>
	);
}
