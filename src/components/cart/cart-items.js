import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fp from '../../images/fp.png';
import { Input } from '../input';

const TextDiv = styled.div`
	pointer-events: none;
`;

const P = styled.p`
	pointer-events: none;
`;

const H5 = styled.h5`
	pointer-events: none;
`;

const Del = styled.div`
	font-size: 1.2rem;
	&:hover {
		cursor: pointer;
		background-color: #dc3545;
		opacity: 1;
	}
`;

const Button = styled.button`
	border: 1px solid #373535;
	border-radius: 3px;
	background-color: #F6F8F8
	font-weight: bold
	width: 40px
	height: 27px;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
`;

class CartItems extends React.Component {
	state = { cart: this.props.cart };

	handleCartChange = (type, id) => {
		const tempCart = JSON.parse(JSON.stringify(this.state.cart));
		const [productToEdit] = tempCart.filter(product => product.id === id);
		const productInCart = tempCart[tempCart.indexOf(productToEdit)];

		if (type === 'minus') {
			if (productInCart.qty > 1) {
				productInCart.qty -= 1;
				productInCart.totalPrice -= productInCart.unitPrice;
				this.props.setCart(tempCart);
				this.setState({ cart: tempCart });
			}
		} else {
			productInCart.qty += 1;
			productInCart.totalPrice += productInCart.unitPrice;
			this.props.setCart(tempCart);
			this.setState({ cart: tempCart });
		}
	};

	handleInputChange;

	render() {
		if (this.props.cart.length === 0) {
			return <h4 className="mt-5">Το καλάθι σας είναι άδειο</h4>;
		}
		return (
			<div>
				{this.state.cart.map(product => (
					<div key={product.id}>
						<div className="card my-2">
							<div className="card-body">
								<div className="row">
									<div className="col-3">
										<img
											className="img-fluid"
											src={fp}
											alt={product.name}
										/>
									</div>
									<div className="col-6">
										<H5 className="card-title d-inline pl-3 d-block">
											{product.name}
										</H5>
										<div className="pl-3">
											<P
												style={{
													marginBottom: '0.5rem',
												}}
											>
												<strong>
													Τιμή κιλού:{' '}
													{product.unitPrice}
												</strong>
												&euro;
											</P>
											<P className="mb-0">Ποσότητα</P>
											<Button
												type="minus"
												onClick={() =>
													this.handleCartChange(
														'minus',
														product.id,
														this.props.cart,
														product.unitPrice,
													)
												}
											>
												-
											</Button>
											<Input
												value={product.qty}
												readOnly
											/>
											<Button
												type="plus"
												onClick={() =>
													this.handleCartChange(
														'plus',
														product.id,
													)
												}
											>
												+
											</Button>
										</div>
									</div>
									<TextDiv className="col-2 d-flex align-items-center justify-content-center">
										<h4 className="card-text text-center">
											<p className="font-weight-light">
												Σύνολο
											</p>
											<strong>
												{product.totalPrice}
											</strong>
											&euro;
										</h4>
									</TextDiv>
									<Del
										onClick={() =>
											this.props.deleteItem(product)
										}
										className="col-1 d-flex align-items-center justify-content-center"
									>
										x
									</Del>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

CartItems.propTypes = {
	cart: PropTypes.array,
	deleteItem: PropTypes.func,
	setCart: PropTypes.func,
};

export default CartItems;
