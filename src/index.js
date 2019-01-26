import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Product from './components/product';
import { Contact } from './components/contact';
import { NavBar } from './components/navbar/nav-bar';
import { ProductList } from './components/product-list';
import { Footer } from './components/footer';
import Login from './components/login';
import Cart from './components/cart/index';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { userLogged: false, cart: [] };
	}
	changeLogState = logged => {
		if (logged) {
			return this.setState({ userLogged: true }, () =>
				localStorage.setItem('userLogged', 'true'),
			);
		}
		return this.setState({ userLogged: false }, () =>
			localStorage.removeItem('userLogged'),
		);
	};

	setCart = newCart =>
		this.setState(
			{ cart: newCart },
			localStorage.setItem('cart', JSON.stringify(newCart)),
		);

	deleteItem = product => {
		const tempCart = this.state.cart;
		tempCart.splice(tempCart.indexOf(product), 1);
		this.setState({ cart: tempCart }, () =>
			localStorage.setItem('cart', JSON.stringify(tempCart)),
		);
	};

	componentWillMount() {
		const savedLogState = localStorage.getItem('userLogged');
		if (savedLogState === 'true') {
			this.setState({ userLogged: true });
		}
		const savedCart = JSON.parse(localStorage.getItem('cart'));
		if (savedCart !== null) {
			this.setState({ cart: savedCart });
		}
	}

	render() {
		// console.log('Cart items:');
		// this.state.cart.map(item => console.log(item));
		// console.log('--------------------------------');

		return (
			<div>
				<Router>
					<div>
						<NavBar
							userLogged={this.state.userLogged}
							changeLogState={this.changeLogState}
							cart={this.state.cart}
						/>

						<Route exact path="/" component={ProductList} />
						<Route
							path="/product/:id"
							render={props => (
								<Product
									{...props}
									cart={this.state.cart}
									setCart={this.setCart}
								/>
							)}
						/>
						<Route path="/contact" component={Contact} />
						<Route
							path="/cart"
							render={props => (
								<Cart
									{...props}
									userLogged={this.state.logged}
									cart={this.state.cart}
									deleteItem={this.deleteItem}
									handleCartChange={this.handleCartChange}
									setCart={this.setCart}
								/>
							)}
						/>
						<Route
							path="/login"
							render={props => (
								<Login
									{...props}
									userLogged={this.state.userLogged}
									changeLogState={this.changeLogState}
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
