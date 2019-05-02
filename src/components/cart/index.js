import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { CartItems } from './cart-items';
import CartCheckout from './cart-checkout';
import { getIdFromToken } from '../../data/decode-token';

class Cart extends React.Component {
	state = {
		fetchedCartInfo: [],
		loading: true,
	};

	fetchData = () => {
		const token = localStorage.getItem('token');
		if (token) {
			const userId = getIdFromToken(token);
			return fetch(`https://api.farmapalatia.gr/cart/${userId}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
				.then(result => result.json())
				.then(fetchedCartInfo =>
					this.setState({
						fetchedCartInfo,
						loading: false,
					}),
				)
				.catch(error => console.error('Error:', error));
		}
		return null;
	};

	updateQty = (cartId, newQuantity) => {
		const token = localStorage.getItem('token');
		return fetch(`https://api.farmapalatia.gr/cart/${cartId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				quantity: newQuantity,
			}),
		})
			.then(result => result.json())
			.then(() => this.fetchData())
			.catch(error => console.error('Error:', error));
	};

	deleteProd = cartId => {
		const token = localStorage.getItem('token');
		return fetch(`https://api.farmapalatia.gr/cart/${cartId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(() => this.fetchData())
			.catch(error => console.error('Error:', error));
	};

	handleChange = (type, id) => {
		const tempCart = this.state.fetchedCartInfo;
		const [productToEdit] = tempCart.filter(product => product.id === id);
		const temp = tempCart[tempCart.indexOf(productToEdit)];
		if (type === 'minus') {
			if (temp.quantity > 1) {
				temp.quantity -= 1;
				temp.totalPrice -= temp.unitPrice;
				this.updateQty(temp.id, temp.quantity);
			}
		} else {
			temp.quantity += 1;
			temp.totalPrice += temp.unitPrice;
			this.updateQty(temp.id, temp.quantity);
		}
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		if (!token) {
			return this.props.history.replace('/login');
		}
		return this.fetchData();
	}

	render() {
		if (this.state.loading) {
			return (
				<React.Fragment>
					<div className="d-flex justify-content-center mt-4">
						<Loader
							type="Oval"
							color="#27ae60"
							height={80}
							width={80}
						/>
					</div>
					<p className="text-center">Το καλάθι σας φορτώνει</p>
				</React.Fragment>
			);
		}
		return (
			<div className="container">
				<div className="row mt-4">
					<div className="col-md-7 col-sm-12">
						<CartItems
							cart={this.state.fetchedCartInfo}
							setCart={this.props.setCart}
							handleChange={this.handleChange}
							deleteProd={this.deleteProd}
						/>
					</div>
					<div className="col-md-5 col-sm-12 sticky-top">
						<CartCheckout cart={this.state.fetchedCartInfo} />
					</div>
				</div>
			</div>
		);
	}
}

Cart.propTypes = {
	setCart: PropTypes.func,
	history: PropTypes.object,
};
export default Cart;
