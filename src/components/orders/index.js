import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import checked from '../../icons/checked.png';
import { getIdFromToken } from '../../data/decode-token';
import { DisabledInput, TextDiv, PMB, P, H5 } from '../cart/style';

const Input = styled.input`
	opacity: 1;
`;

class Orders extends React.Component {
	state = { loading: true, userToShow: '', cart: [], userList: [] };

	fetchCartData = () => {
		const token = localStorage.getItem('token');
		fetch(`https://api.farmapalatia.gr/cart/${this.state.userToShow}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(cart => this.setState({ cart }))
			.then(() => this.fetchUserData())
			.catch(error => console.error('Error:', error));
	};

	fetchUserData = () => {
		const token = localStorage.getItem('token');
		fetch(`https://api.farmapalatia.gr/user/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(userList => this.setState({ userList, loading: false }))
			.catch(error => console.error('Error:', error));
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		if (userId !== 1 && userId !== 2) {
			this.props.history.replace('/');
		}
		return this.fetchCartData();
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
					<p className="text-center">Παρακαλώ περιμένετε</p>
				</React.Fragment>
			);
		}
		return (
			<div className="container">
				<div className="row my-3">
					<div className="col-12">
						<Input />
					</div>
				</div>
				{this.state.userList.map((user, index) => (
					<div key={index} className="mt-2">
						<hr />
						<div>
							<H5> {user.id} </H5>
							<H5> {user.name} </H5>
							<H5> {user.email} </H5>
							<H5>
								{user.country}, {user.street}, {user.postal}
							</H5>
							<H5> {user.phone} </H5>
						</div>
						{this.state.cart.map(
							product =>
								product.userId === user.id && (
									<div key={product.name} className="row">
										<div className="col-10">
											<div className="card my-2">
												<div className="card-body">
													<div className="row">
														<div className="col-3 d-flex align-items-center">
															<div className="col-2">
																{product.confirmed ? (
																	<img
																		src={
																			checked
																		}
																		alt="checked"
																	/>
																) : (
																	<span>
																		-
																	</span>
																)}
															</div>
															<div className="col-10">
																<img
																	className="img-fluid"
																	src={`https://api.farmapalatia.gr/images/products/${
																		product.image
																	}`}
																	alt={
																		product.name
																	}
																/>
															</div>
														</div>
														<div className="col-5">
															<H5 className="card-title d-inline pl-3 d-block">
																{product.name}
															</H5>
															<div className="pl-3">
																<PMB>
																	<strong>
																		{product.name ===
																		'Πεστίλη μήλου χύμα' ? (
																			<span>
																				Τιμή
																				κιλού:{' '}
																			</span>
																		) : (
																			<span>
																				Τιμή:{' '}
																			</span>
																		)}
																		{
																			product.unitPrice
																		}
																	</strong>
																	&euro;
																</PMB>
																<P className="mb-0">
																	Ποσότητα
																</P>

																<DisabledInput
																	value={
																		product.quantity
																	}
																	readOnly
																/>
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
														<div className="col-1 d-flex align-items-center justify-content-center" />
													</div>
												</div>
											</div>
										</div>
									</div>
								),
						)}
					</div>
				))}
			</div>
		);
	}
}

Orders.propTypes = {
	history: PropTypes.object,
};

export default Orders;
