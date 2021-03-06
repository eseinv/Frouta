import React from 'react';
import PropTypes from 'prop-types';
import { getIdFromToken } from '../../data/decode-token';
import { FormButton } from '../styled/form-button';

const calculateTotal = cart => {
	const priceArray = [];
	cart.map((cartItem, index) =>
		priceArray.push(cart[index].unitPrice * cart[index].quantity),
	);
	const prices = priceArray.reduce((sum, price) => sum + price, 0);
	return prices;
};

const confirmCart = () => {
	const token = localStorage.getItem('token');
	const userId = getIdFromToken(token);
	return fetch(`https://api.farmapalatia.gr/cart/user/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(result => result.json())
		.catch(error => console.error('Error:', error));
};

const CartCheckout = props => (
	<div className="sticky-top text-center h3 p-3 mt-2 card">
		<div className="row">
			<div className="col-12 font-weight-light">Σύνολο προς πληρωμή:</div>
		</div>
		<div className="row mt-2">
			<div className="col-12">
				<span className="mt-2 h1 font-weight-bold">
					{calculateTotal(props.cart)} &euro;
				</span>
			</div>
		</div>
		<div className="row">
			<div className="col-12">
				<FormButton
					onClick={() => confirmCart()}
					width={200}
					className="text-center h4"
				>
					Επιβεβαίωση
				</FormButton>
				<p className="h5 border text-left p-2">
					Αφού πατήσετε επιβεβαίωση, καλέστε στο{' '}
					<strong>6945296507</strong> για να επεξεργαστεί η παραγγελία
					σας
				</p>
			</div>
		</div>
	</div>
);

CartCheckout.propTypes = {
	cart: PropTypes.array,
};
export default CartCheckout;
