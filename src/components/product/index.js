import React from 'react';
import PropTypes from 'prop-types';
import {
	NotificationContainer,
	NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Loader from 'react-loader-spinner';
import { CartButton } from '../styled/cart-button';
import { FormButton } from '../styled/form-button';
import { Input, DeadInput, ProdName, ProdText, Label } from './style';

class Product extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedProduct: '',
			selectedQuantity: 0,
			loading: true,
		};
	}

	fetchData = () => {
		const selectedProductId = this.props.match.params.id;
		return fetch(`http://homestead.test/product/${selectedProductId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(result => result.json())
			.then(product =>
				this.setState({
					selectedProduct: product,
					selectedQuantity: 1,
					loading: false,
				}),
			)
			.catch(error => console.error('Error:', error));
	};
	componentDidMount() {
		this.fetchData();
	}
	handleFormSubmit = event => {
		event.preventDefault();

		let newCart;

		const newItemToAdd = {
			id: this.state.selectedProduct.id,
			qty: this.state.selectedQuantity,
			unitPrice: this.state.selectedProduct.unitPrice,
			totalPrice:
				this.state.selectedProduct.unitPrice *
				this.state.selectedQuantity,
			//	+ extraPackPrice,
			name: this.state.selectedProduct.name,
			info: this.state.selectedProduct.info,
			image: this.state.selectedProduct.image,
		};

		const check = this.props.cart.filter(
			item => item.id === newItemToAdd.id,
		)[0];

		if (check) {
			const index = this.props.cart.indexOf(check);
			const tempCart = this.props.cart;
			check.qty += this.state.selectedQuantity;
			check.totalPrice += newItemToAdd.totalPrice;
			tempCart[index] = check;
			newCart = tempCart;
		} else {
			newCart = [...this.props.cart, newItemToAdd];
		}
		return this.props.setCart(newCart);
	};

	handleInputChange = value => {
		const parsed = value.length === 0 || value === '0' ? 1 : value; // TODO remove ability to enter string after ctrl+a
		this.setState({ selectedQuantity: parseInt(parsed, 10) });
	};

	handleCartChange = type => {
		if (type === 'minus') {
			if (this.state.selectedQuantity > 1) {
				this.setState({
					selectedQuantity: this.state.selectedQuantity - 1,
				});
			}
		} else
			this.setState({
				selectedQuantity: this.state.selectedQuantity + 1,
			});
	};

	createNotification = (type, props) => () => {
		switch (type) {
			case 'info':
				NotificationManager.info(
					'Το προϊόν προστέθηκε στο καλάθι',
					'',
					2000,
				);
				break;
			case 'success':
				NotificationManager.success(
					'Το προϊόν προστέθηκε στο καλάθι',
					'',
					2000,
					() => props.history.push('/cart'),
				);
				break;
			// no default
		}
	};

	render() {
		const totalPrice = `${this.state.selectedProduct.unitPrice *
			this.state.selectedQuantity} \u20AC`;
		if (!this.state.loading) {
			return (
				<div className="container mt-4">
					<div className="row mt-4">
						<div className="col-sm-12 col-lg-3 offset-lg-1">
							<img
								src={`http://homestead.test/images/${
									this.state.selectedProduct.image
								}`}
								alt="Product Name"
								className="img-fluid"
							/>
						</div>
						<div className="col-sm-12 col-lg-4">
							<ProdName className="mt-2">
								{this.state.selectedProduct.name}
							</ProdName>
							<ProdText>
								{this.state.selectedProduct.info}
							</ProdText>
							<form onSubmit={e => this.handleFormSubmit(e)}>
								<div className="row">
									<div className="col-12">
										<Label
											htmlFor="quantity"
											className="d-block"
										>
											Συνολική τιμή
										</Label>
										<DeadInput
											id="quantity"
											placeholder="Ποσότητα..."
											type="text"
											value={totalPrice}
											readOnly
										/>
									</div>
									<div className="col-12">
										<Label
											htmlFor="quantity"
											className="d-block"
										>
											Ποσότητα (kg)
										</Label>
										<CartButton
											type="minus"
											handleCartChange={
												this.handleCartChange
											}
										>
											-
										</CartButton>
										<Input
											className="mx-1"
											id="quantity"
											onChange={event =>
												this.handleInputChange(
													event.target.value,
												)
											}
											placeholder="Ποσότητα..."
											type="text"
											value={this.state.selectedQuantity}
										/>
										<CartButton
											type="plus"
											handleCartChange={
												this.handleCartChange
											}
										>
											+
										</CartButton>
									</div>

									<div className="col-12">
										<FormButton
											width={100}
											onClick={this.createNotification(
												'success',
												this.props,
											)}
										>
											Προσθήκη
										</FormButton>
									</div>
									<NotificationContainer />
								</div>
							</form>
						</div>
					</div>
				</div>
			);
		}
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
				<p className="text-center">Παρακαλώ περιμένετε</p>
			</React.Fragment>
		);
	}
}

Product.propTypes = {
	match: PropTypes.object,
	cart: PropTypes.array,
	setCart: PropTypes.func,
};

export default Product;
