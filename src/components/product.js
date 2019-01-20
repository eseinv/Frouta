import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import fp from '../images/fp.png';
import { MainProductList } from '../main-product-list';
import { CartButton } from './cart-button';
import { Input } from './input';

const CartAdd = styled.button`
	background-color: #fff;
	border: 1px solid #587c34;
	margin-top: 10px;
	width: 100px;
	padding: 5px 6px 5px 6px;
	color: #587c34;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
		color: #fff;
		background-color: #587c34;
	}
`;

const ProdName = styled.h4`
	color: #707070;
	cursor: default;
`;

const ProdText = styled.p`
	color: #707070;
	cursor: default;
`;

const ToggleSwitch = styled(Switch)`
	background: '#bfbb7b';
`;

const DeadInput = styled(Input)`
	width: 120px;
	border-color: transparent;
	background: none;
	font-size: 28px;
	font-weight: bold;
	color: #1b1b1b;
	text-align: left;
	pointer-events: none;
	&:hover {
		cursor: default;
	}
`;

const labelStyle = {
	color: '#707070',
	textDecoration: 'underline',
};

class Product extends React.Component {
	constructor(props) {
		super(props);

		this.selectedProductId = this.props.match.params.id;
		const filterSelected = MainProductList.filter(
			product => product.id === this.selectedProductId,
		);
		if (filterSelected) {
			const [productFound] = filterSelected;
			this.state = {
				selectedProduct: productFound,
				selectedQuantity: 1,
				checkedSwitch: false,
				extraPackagePrice: 0,
			};
		}
	}

	handleFormSubmit = event => {
		event.preventDefault();

		let newCart;
		const extraPackPrice = this.state.extraPackagePrice
			? 0.2 * this.state.selectedQuantity
			: 0;
		const newItemToAdd = {
			id: this.state.selectedProduct.id,
			qty: this.state.selectedQuantity,
			unitPrice: this.state.selectedProduct.unitPrice,
			totalPrice:
				this.state.selectedProduct.unitPrice *
					this.state.selectedQuantity +
				extraPackPrice,
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

	handlePackageSwitch = e => {
		const newPrice = this.state.checkedSwitch
			? 0
			: 0.2 * this.state.selectedQuantity;
		this.setState({
			extraPackagePrice: newPrice,
			checkedSwitch: e,
		});
	};

	render() {
		const extraPackPrice = this.state.extraPackagePrice
			? 0.2 * this.state.selectedQuantity
			: 0;
		const totalPrice = `${this.state.selectedProduct.unitPrice *
			this.state.selectedQuantity +
			extraPackPrice} \u20AC`;
		return (
			<div className="container mt-4">
				<div className="row mt-4">
					<div className="col-sm-12 col-lg-3 offset-lg-1">
						<img
							src={fp}
							alt="Product Name"
							className="img-fluid"
						/>
					</div>
					<div className="col-sm-12 col-lg-4">
						<ProdName className="mt-2">
							{this.state.selectedProduct.name}
						</ProdName>
						<ProdText>{this.state.selectedProduct.info}</ProdText>
						<form onSubmit={e => this.handleFormSubmit(e)}>
							<div className="row">
								<div className="col-12">
									<label
										htmlFor="quantity"
										className="d-block"
										style={labelStyle}
									>
										Συνολική τιμή
									</label>
									<DeadInput
										id="quantity"
										placeholder="Ποσότητα..."
										type="text"
										value={totalPrice}
										readOnly
									/>
								</div>
								<div className="col-12">
									<label
										htmlFor="quantity"
										className="d-block"
										style={labelStyle}
									>
										Ποσότητα (kg)
									</label>
									<CartButton
										type="minus"
										handleCartChange={this.handleCartChange}
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
										handleCartChange={this.handleCartChange}
									>
										+
									</CartButton>
								</div>
								<div className="col-12">
									<label htmlFor="material-switch">
										<span style={labelStyle}>
											Πακετάρισμα (0.2 {'\u20AC'} ανά
											κιλό)
										</span>
									</label>
								</div>
								<div className="col-12">
									<ToggleSwitch
										checked={this.state.checkedSwitch}
										onChange={st =>
											this.handlePackageSwitch(st)
										}
										offColor="#e2dfb2"
										onColor="#bfbb7b"
										onHandleColor="#587c34"
										handleDiameter={20}
										uncheckedIcon={false}
										checkedIcon={false}
										boxShadow="0px 1px 5px rgba(0, 0, 0, 0.4)"
										activeBoxShadow="0 1px 5px rgba(57,55,55, 1)"
										height={17}
										width={40}
										className="react-switch"
										id="material-switch"
									/>
								</div>
								<div className="col-12 mt-2">
									<CartAdd> Προσθήκη </CartAdd>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	match: PropTypes.object,
	cart: PropTypes.array,
	setCart: PropTypes.func,
};

export default Product;
