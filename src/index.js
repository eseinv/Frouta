import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import Login from './components/login/';
import Register from './components/register/';
import Orders from './components/orders/';
import Menu from './components/menu/';
import Cart from './components/cart/index';
import Product from './components/product/';
import Partners from './components/partners/';
import { Contact } from './components/contact/';
import { NavBar } from './components/navbar/';
import { ProductList } from './components/product-list/';
import { Footer } from './components/footer/';
//	import Gallery from './components/image-gallery/';
import { PastilaInfo } from './components/pastila-info/';
//	import { shuffle } from './data/shuffler';
import { Video } from './components/video';
import ArticleList from './components/article-list';
import Article from './components/article';
import EditArticle from './components/article/edit-article';
import AddArticle from './components/article/add-article';
import UpdateArticle from './components/article/update-article';

class App extends React.Component {
	constructor(props) {
		super(props);

		// this.state = { userLogged: false, cart: [], images: [] };
		this.state = { userLogged: false, cart: [] };
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

	// makeGallery = () => {
	// 	const images = shuffle(Images);
	// 	if (images.length > 0) this.setState({ images });
	// };

	componentWillMount() {
		const savedLogState = localStorage.getItem('userLogged');
		if (savedLogState === 'true') {
			this.setState({ userLogged: true });
		}

		const savedCart = JSON.parse(localStorage.getItem('cart'));
		if (savedCart !== null) {
			this.setState({ cart: savedCart });
		}

		// this.makeGallery();
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
						{/* <Route
							exact
							path="/"
							render={props => (
								<Gallery
									{...props}
									images={this.state.images}
								/>
							)}
						/> */}

						<Route exact path="/" component={Video} />
						<Route exact path="/" component={ProductList} />
						<Route
							path="/product/:id"
							render={props => (
								<Product
									{...props}
									cart={this.state.cart}
									setCart={this.setCart}
									userLogged={this.state.userLogged}
								/>
							)}
						/>
						<Route path="/partners" component={Partners} />
						<Route path="/contact" component={Contact} />
						<Route path="/info" component={PastilaInfo} />
						<Route path="/articles" component={ArticleList} />
						<Route path="/article/:id" component={Article} />
						<Route path="/editarticle/" component={EditArticle} />
						<Route path="/addarticle/" component={AddArticle} />
						<Route
							path="/updatearticle/"
							component={UpdateArticle}
						/>
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
						<Route path="/register" component={Register} />
						<Route path="/orders" component={Orders} />
						<Route path="/menu" component={Menu} />
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
