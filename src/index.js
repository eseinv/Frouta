import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Frouta } from './components/index';
import { Pricelist } from './components/pricelist';
import { Contact } from './components/contact';

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Frouta} />
			<Route path="/pricelist" component={Pricelist} />
			<Route path="/contact" component={Contact} />
		</div>
	</Router>
);

ReactDOM.render(<App />, document.querySelector('.root'));
