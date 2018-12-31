import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import fp from '../images/fp.png';
import { MainProductList } from '../main-product-list';
import { CartButton } from './cart-button';

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

const Input = styled.input`
	width: 35px;
	border: 1px solid #373535;
	border-radius: 3px;
	background: #fff;
	&:focus {
		outline: none;
	}
	color: #373535
	text-align: center;
	margin-bottom: 1rem;
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
		this.state = {
			quantity: 1,
			cart: [],
			checkedSwitch: false,
			extraPackagePrice: 0,
		};
		this.handleCartChange = this.handleCartChange.bind(this);
		const selectedProductId = this.props.match.params.id;
		const filterSelected = MainProductList.filter(
			product => product.id === selectedProductId,
		);
		if (filterSelected) {
			[this.selectedProduct] = filterSelected;
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		let newCart;
		const newCartItems = { prodId: 1001, qty: this.state.quantity };

		const exists = this.state.cart.filter(
			item => item.prodId === newCartItems.prodId,
		)[0];

		if (exists) {
			const index = this.state.cart.indexOf(exists);
			const tempCart = this.state.cart;
			exists.qty += this.state.quantity;
			tempCart[index] = exists;
			newCart = tempCart;
		} else {
			newCart = [...this.state.cart, newCartItems];
		}
		return this.setState({ cart: newCart });
	};

	handleChange = value => {
		const parsed = value.length === 0 || value === '0' ? 1 : value;
		this.setState({ quantity: parseInt(parsed, 10) });
	};

	handleCartChange = type => {
		if (type === 'minus') {
			if (this.state.quantity > 1) {
				this.setState({ quantity: this.state.quantity - 1 });
			}
		} else this.setState({ quantity: this.state.quantity + 1 });
	};

	handleSwitch = e => {
		const newPrice = this.state.checkedSwitch
			? 0
			: 0.2 * this.state.quantity;
		this.setState({
			extraPackagePrice: newPrice,
			checkedSwitch: e,
		});
	};

	render() {
		const extraPackPrice = this.state.extraPackagePrice
			? 0.2 * this.state.quantity
			: 0;
		const totalPrice = `${this.selectedProduct.unitPrice *
			this.state.quantity +
			extraPackPrice} \u20AC`;
		return (
			<div className="container mt-4">
				{/* <div className="package mt-5 row">
					<Button
						type="left"
						active={this.state.packed === 1}
						onClick={() =>
							this.setState({
								packed: 1,
							})
						}
					>
						Πακεταρισμένο
					</Button>
					<Button
						active={this.state.packed === 2}
						type="right"
						onClick={() =>
							this.setState({
								packed: 2,
							})
						}
					>
						Απλή συσκευασία
					</Button>
				</div> */}

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
							{this.selectedProduct.name}
						</ProdName>
						<ProdText>{this.selectedProduct.info}</ProdText>
						<form onSubmit={e => this.handleSubmit(e)}>
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
											this.handleChange(
												event.target.value,
											)
										}
										placeholder="Ποσότητα..."
										type="text"
										value={this.state.quantity}
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
											{' '}
											Πακετάρισμα (0.2 {'\u20AC'} ανά
											κιλό)
										</span>
									</label>
								</div>
								<div className="col-12">
									<ToggleSwitch
										checked={this.state.checkedSwitch}
										onChange={st => this.handleSwitch(st)}
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
};

export { Product };
