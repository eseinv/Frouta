import React from 'react';
import PropTypes from 'prop-types';
import { SingleCartItem } from './singlecartitem';

const CartItems = props =>
	props.cart.map(product => (
		<SingleCartItem
			item={product}
			key={product.id}
			handleChange={props.handleChange}
			deleteProd={props.deleteProd}
		/>
	));

CartItems.propTypes = {
	cart: PropTypes.object,
	handleChange: PropTypes.func,
	deleteProd: PropTypes.func,
};

export { CartItems };
