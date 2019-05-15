import React from 'react';
import PropTypes from 'prop-types';
import {
	NotificationContainer,
	NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Loader from 'react-loader-spinner';
import { MainImage } from './main-image';
import { SmallImage } from './small-image';
import { getIdFromToken } from '../../data/decode-token';
import { CartButton } from '../styled/cart-button';
import { FormButton } from '../styled/form-button';
import {
	Input,
	DeadInput,
	ProdName,
	ProdText,
	Label,
	PreviewWrap,
	PreviewButton,
} from './style';

class Product extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedProduct: {},
			selectedQuantity: 0,
			activeImage: `https://api.farmapalatia.gr/images/fp.png2`,
			loading: true,
		};
	}

	fetchData = () => {
		const selectedProductId = this.props.match.params.id;
		return fetch(
			`https://api.farmapalatia.gr/product/${selectedProductId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
			.then(result => result.json())
			.then(product =>
				this.setState({
					selectedProduct: product,
					activeImage: `https://api.farmapalatia.gr/images/products/${
						product.images[0].path
					}`,
					selectedQuantity: 1,
					loading: false,
				}),
			)
			.catch(error => console.error('Error:', error));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		const userId = getIdFromToken(localStorage.getItem('token'));
		const newItemToAdd = {
			productId: this.state.selectedProduct.id,
			quantity: this.state.selectedQuantity,
			userId,
			name: this.state.selectedProduct.name,
			info: this.state.selectedProduct.info,
			image: this.state.selectedProduct.image,
			unitPrice: this.state.selectedProduct.unitPrice,
		};
		fetch(`https://api.farmapalatia.gr/cart/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(newItemToAdd),
		})
			.then(result => result.json())
			.catch(error => console.error('Error:', error));
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

	setActiveImage = activeImage => {
		this.setState({ activeImage });
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const totalPrice = `${this.state.selectedProduct.unitPrice *
			this.state.selectedQuantity} \u20AC`;
		if (!this.state.loading) {
			return (
				<div className="container mt-4">
					<div className="row mt-4">
						<div className="col-sm-12 col-lg-4 offset-lg-1">
							<MainImage image={this.state.activeImage} />
							<PreviewWrap className="d-flex justify-content-between flex-wrap">
								{this.state.selectedProduct.images.map(
									(image, index) => (
										<PreviewButton
											key={index}
											onClick={() =>
												this.setActiveImage(
													`https://api.farmapalatia.gr/images/products/${
														image.path
													}`,
												)
											}
										>
											<SmallImage
												active={
													this.state.activeImage ===
													`https://api.farmapalatia.gr/images/products/${
														image.path
													}`
												}
												image={`https://api.farmapalatia.gr/images/products/${
													image.path
												}`}
											/>
										</PreviewButton>
									),
								)}
							</PreviewWrap>
						</div>
						<div className="col-sm-12 col-lg-6">
							<ProdName className="mt-2">
								{this.state.selectedProduct.name}
							</ProdName>
							<ProdText className="text-justify">
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
											Ποσότητα
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
										{this.props.userLogged ? (
											<FormButton
												width={100}
												onClick={this.createNotification(
													'success',
													this.props,
												)}
											>
												Προσθήκη
											</FormButton>
										) : (
											<FormButton
												width={100}
												onClick={() =>
													this.props.history.push(
														'/login',
													)
												}
											>
												<strong>Είσοδος</strong>
											</FormButton>
										)}
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
	history: PropTypes.object,
	userLogged: PropTypes.bool,
};

export default Product;
