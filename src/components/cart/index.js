import React from 'react';
import PropTypes from 'prop-types';
import CartItems from './cart-items';
import CartCheckout from './cart-checkout';

class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-7">
						<CartItems
							cart={this.props.cart}
							deleteItem={this.props.deleteItem}
							handleCartChange={this.props.handleCartChange}
							setCart={this.props.setCart}
						/>
					</div>
					<div className="col-5 sticky-top">
						<CartCheckout cart={this.props.cart} />
					</div>
				</div>
			</div>
		);
	}
}

Cart.propTypes = {
	cart: PropTypes.array,
	deleteItem: PropTypes.func,
	handleCartChange: PropTypes.func,
	setCart: PropTypes.func,
};
export default Cart;
