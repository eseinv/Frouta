import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Pricelist } from './components/pricelist';
import { Contact } from './components/contact';
import { NavBar } from './components/navbar/nav-bar';
import { ProductList } from './components/product-list';
import { Footer } from './components/footer';

class App extends React.Component {
	constructor() {
		super();
		this.state = { logState: false };
	}
	toggleLog = () => {
		this.setState({ logState: !this.state.logState });
	};
	render() {
		return (
			<div>
				<Router>
					<div>
						<NavBar
							toggleLog={this.toggleLog}
							logState={this.state.logState}
						/>

						<Route exact path="/index" component={ProductList} />
						<Route path="/pricelist" component={Pricelist} />
						<Route path="/contact" component={Contact} />
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
