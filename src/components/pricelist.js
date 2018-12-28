import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fp from '../images/fp.png';
import { MainProductList } from '../main-product-list';

const LeftButtonRadius = '5px 0 0 5px';
const RightButtonRadius = '0 5px 5px 0';

const Button = styled.button`
	border: 1px solid #707070;
	border-radius: ${props =>
		props.type === 'left' ? LeftButtonRadius : RightButtonRadius}
	border-right-width: ${props => (props.type === 'left' ? '0' : '1')};
	border-left-width: ${props => (props.type === 'right' ? '0' : '1')};
	color: ${props => (props.active ? '#fff' : '#587c34')}
		background-color: ${props => (props.active ? '#587c34' : '#fff')};
	padding: 5px 6px 5px 6px;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

const CartButton = styled.button`
	background-color: #fff;
	border: 1px solid #587c34;
	margin-left: 10px;
	padding: 5px 6px 5px 6px;
	color: #587c34;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
`;

const ProdPic = styled.img`
	max-width: 470px;
`;

const ProdName = styled.h4`
	color: #707070;
`;

const ProdText = styled.p`
	color: #707070;
`;

const Input = styled.input`
	width: 25%;
	border: none;
	border-bottom: 3px solid #707070;
	background-color: inherit;
	color: #707070;
	text-align: center;
`;

const labelStyle = {
	color: '#707070',
	textDecoration: 'underline',
};

class Pricelist extends React.Component {
	constructor(props) {
		super(props);
		this.state = { packed: 1, quantity: 1, cart: [] };

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
		const parsed = value.length === 0 ? 0 : value;
		this.setState({ quantity: parseInt(parsed, 10) });
	};

	render() {
		return (
			<div className="container">
				<div className="package mt-5 row">
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
				</div>

				<div className="row mt-4">
					<div className="col-sm-12 col-md-3 offset-1">
						<ProdPic src={fp} alt="Product Name" />
					</div>
					<div className="col-sm-12 col-md-4 ml-2 mt-2">
						<ProdName>{this.selectedProduct.name}</ProdName>
						<ProdText>{this.selectedProduct.info}</ProdText>
						<form onSubmit={e => this.handleSubmit(e)}>
							<label
								htmlFor="quantity"
								className="d-block"
								style={labelStyle}
							>
								Ποσότητα (kg)
							</label>
							<Input
								id="quantity"
								onChange={event =>
									this.handleChange(event.target.value)
								}
								placeholder="Ποσότητα..."
								type="text"
								value={this.state.quantity}
							/>
							<CartButton> Προσθήκη </CartButton>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Pricelist.propTypes = {
	match: PropTypes.object,
};

export { Pricelist };
