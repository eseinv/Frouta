import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { DisabledInput, TextDiv, P, H5, Del, Button } from './style';

class CartItems extends React.Component {
	state = { loading: true, fetchedCartInfo: [] };

	fetchData = () => {
		const userId = 1;
		const token = localStorage.getItem('token');
		return fetch(`http://homestead.test/cart/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(fetchedCartInfo =>
				this.setState(
					{
						fetchedCartInfo,
						loading: false,
					},
					console.log(fetchedCartInfo),
				),
			)
			.catch(error => console.error('Error:', error));
	};

	componentDidMount() {
		this.fetchData();
		//	console.log(this.state.fetchedCartInfo);
	}

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
		if (!this.state.loading) {
			if (this.props.cart.length === 0) {
				return <h4 className="mt-5">Το καλάθι σας είναι άδειο</h4>;
			}
			return (
				<div>
					{/* <SingleCartItem /> inside map instead of the whole thing */}
					{this.state.fetchedCartInfo.map(product => (
						<div key={product.id}>
							<div className="card my-2">
								<div className="card-body">
									<div className="row">
										<div className="col-3">
											<img
												className="img-fluid"
												src={`http://homestead.test/images/${
													product.image
												}`}
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
													value={product.quantity}
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
													{product.unitPrice *
														product.quantity}
												</strong>
												&euro;
											</h4>
										</TextDiv>
										<div className="col-1 d-flex align-items-center justify-content-center">
											<Del
												className="btn"
												onClick={() =>
													this.props.deleteItem(
														product,
													)
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

CartItems.propTypes = {
	cart: PropTypes.array,
	deleteItem: PropTypes.func,
	setCart: PropTypes.func,
};

export default CartItems;
