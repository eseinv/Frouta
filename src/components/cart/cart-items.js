import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fp from '../../images/fp.png';
import { Input } from '../input';
import { CartButton } from '../cart-button';

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

class CartItems extends React.Component {
	state = { cart: this.props.cart };

	deleteItem = product => {
		const tempCart = this.state.cart;
		tempCart.splice(tempCart.indexOf(product), 1);
		this.setState({ cart: tempCart });
	};

	render() {
		const [cart] = [this.state.cart];
		console.log(cart);
		return (
			<div>
				{cart.map(product => (
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
											<P style={{ marginBottom: 0 }}>
												Τιμή κιλού: {product.unitPrice}
											</P>
											<P style={{ marginBottom: 0 }}>
												Ποσότητα
											</P>
											<CartButton
												type="minus"
												onClick={() =>
													this.handleCartChange(
														product.qty,
													)
												}
											>
												-
											</CartButton>
											<Input
												value={product.qty}
												readOnly
											/>
											<CartButton
												type="plus"
												onClick={() =>
													this.handleCartChange(
														product.qty,
													)
												}
											>
												+
											</CartButton>
										</div>
									</div>
									<TextDiv className="col-2 d-flex align-items-center justify-content-center">
										<h4 className="card-text">
											<strong>
												{product.totalPrice}
											</strong>
											&euro;
										</h4>
									</TextDiv>
									<Del
										onClick={() => this.deleteItem(product)}
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
};

export default CartItems;
