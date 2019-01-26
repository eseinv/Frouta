import React from 'react';
import PropTypes from 'prop-types';

class CartCheckout extends React.Component {
	constructor(props) {
		super(props);
		this.state = { finalCartPrice: 0 };
	}

	updatePrices = prices => {
		this.setState({ finalCartPrice: prices });
	};

	render() {
		const priceArray = [];
		this.props.cart.map((cartItem, index) =>
			priceArray.push(this.props.cart[index].totalPrice),
		);
		const prices = priceArray.reduce((sum, price) => sum + price, 0);
		if (prices !== this.state.finalCartPrice) {
			this.setState({ finalCartPrice: prices });
		}
		return (
			<div className="sticky-top text-center h3 p-3 mt-2 card">
				Σύνολο προς πληρωμή:{' '}
				<strong className="mt-2">
					{this.state.finalCartPrice} &euro;
				</strong>
			</div>
		);
	}
}

CartCheckout.propTypes = {
	cart: PropTypes.array,
};
export default CartCheckout;
