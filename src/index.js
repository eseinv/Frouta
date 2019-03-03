import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import Login from './components/login/';
import Cart from './components/cart/index';
import Product from './components/product/';
import { Contact } from './components/contact/';
import { NavBar } from './components/navbar/';
import { ProductList } from './components/product-list/';
import { Footer } from './components/footer/';
import { Gallery } from './components/image-gallery/';
import { PastilaInfo } from './components/pastila-info/';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { userLogged: false, cart: [], images: [] };
	}
	changeLogState = logged => {
		if (logged) {
			return this.setState({ userLogged: true }, () =>
				localStorage.setItem('userLogged', 'true'),
			);
		}
		return this.setState(
			{ userLogged: false },
			() => localStorage.removeItem('userLogged'),
			localStorage.removeItem('token'),
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

	makeGallery = (x, y) => {
		const images = [
			{
				original: `http://lorempixel.com/${x}/${y}/nature/1`,
				thumbnail: 'http://lorempixel.com/250/150/nature/1/',
			},
			{
				original: `http://lorempixel.com/${x}/${y}/nature/2`,
				thumbnail: 'http://lorempixel.com/250/150/nature/2/',
			},
			{
				original: `http://lorempixel.com/${x}/${y}/nature/3`,
				thumbnail: 'http://lorempixel.com/250/150/nature/3/',
			},
		];
		if (images.length > 0) this.setState({ images });
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

		this.makeGallery(1200, 600);
	}

	render() {
		return (
			<div>
				<Router>
					<div>
						<NavBar
							userLogged={this.state.userLogged}
							changeLogState={this.changeLogState}
							cart={this.state.cart}
						/>
						<Route
							exact
							path="/"
							render={props => (
								<Gallery
									{...props}
									images={this.state.images}
								/>
							)}
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
						<Route path="/info" component={PastilaInfo} />
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
