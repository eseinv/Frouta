import React from 'react';
import PropTypes from 'prop-types';
import fp from '../../images/fp.png';
import { DisabledInput, TextDiv, P, H5, Del, Button } from './style';

class CartItems extends React.Component {
	/* Change to functional component */

	handleCartChange = (type, id) => {
		const tempCart = this.props.cart;
		const [productToEdit] = tempCart.filter(product => product.id === id);
		const productInCart = tempCart[tempCart.indexOf(productToEdit)];

		if (type === 'minus') {
			if (productInCart.qty > 1) {
				productInCart.qty -= 1;
				productInCart.totalPrice -= productInCart.unitPrice;
				this.props.setCart(tempCart);
			}
		} else {
			productInCart.qty += 1;
			productInCart.totalPrice += productInCart.unitPrice;
			this.props.setCart(tempCart);
		}
	};

	render() {
		if (this.props.cart.length === 0) {
			return <h4 className="mt-5">Το καλάθι σας είναι άδειο</h4>;
		}
		return (
			<div>
				{/* <SingleCartItem /> inside map instead of the whole thing */}
				{this.props.cart.map(product => (
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
													)
												}
											>
												-
											</Button>
											<DisabledInput
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
									<div className="col-1 d-flex align-items-center justify-content-center">
										<Del
											className="btn"
											onClick={() =>
												this.props.deleteItem(product)
											}
										>
											x
										</Del>
									</div>
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
