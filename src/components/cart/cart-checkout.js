import React from 'react';
import PropTypes from 'prop-types';
import { FormButton } from '../form-button';

class CartCheckout extends React.Component {
	state = { finalCartPrice: 0 };

	updatePrices = prices => {
		this.setState({ finalCartPrice: prices });
	};

	calculateTotal = () => {
		const priceArray = [];
		this.props.cart.map((cartItem, index) =>
			priceArray.push(this.props.cart[index].totalPrice),
		);
		const prices = priceArray.reduce((sum, price) => sum + price, 0);
		if (prices !== this.state.finalCartPrice) {
			this.setState({ finalCartPrice: prices });
		}
	};

	componentDidMount() {
		this.calculateTotal();
	}
	componentDidUpdate() {
		this.calculateTotal();
	}

	render() {
		return (
			<div className="sticky-top text-center h3 p-3 mt-2 card">
				<div className="row">
					<div className="col-12 font-weight-light">
						Σύνολο προς πληρωμή:
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-12">
						<span className="mt-2 h1 font-weight-bold">
							{this.state.finalCartPrice} &euro;
						</span>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<FormButton width={200} className="text-center h4">
							Επιβεβαίωση
						</FormButton>
					</div>
				</div>
			</div>
		);
	}
}

CartCheckout.propTypes = {
	cart: PropTypes.array,
};
export default CartCheckout;
