import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Product } from './components/product';
import { Contact } from './components/contact';
import { NavBar } from './components/navbar/nav-bar';
import { ProductList } from './components/product-list';
import { Footer } from './components/footer';
import Login from './components/login';

class App extends React.Component {
	state = { userLogged: false };
	logUserIn = () => {
		this.setState({ userLogged: true }, () =>
			localStorage.setItem('userLogged', 'true'),
		);
	};
	logUserOut = () => {
		this.setState({ userLogged: false }, () =>
			localStorage.removeItem('userLogged'),
		);
	};
	componentWillMount() {
		const savedLogState = localStorage.getItem('userLogged');
		if (savedLogState === 'true') {
			this.setState({ userLogged: true });
		}
	}

	render() {
		return (
			<div>
				<Router>
					<div>
						<NavBar
							userLogged={this.state.userLogged}
							logUserOut={this.logUserOut}
						/>

						<Route exact path="/" component={ProductList} />
						<Route path="/product/:id" component={Product} />
						<Route path="/contact" component={Contact} />
						<Route
							path="/login"
							render={props => (
								<Login
									{...props}
									userLogged={this.state.userLogged}
									logUserIn={this.logUserIn}
								/>
							)}
						/>
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
