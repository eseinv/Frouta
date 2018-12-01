import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SignInAltSolid } from '../../icons/sign-in-alt-solid';
import { ShoppingCartSolid } from '../../icons/shopping-cart-solid';

const Button = styled.div`
	opacity: 0.9
	color: #f7f8f8
	&:hover {
		opacity: 1
		color: #fff;
	}
`;

const NavActions = props => {
	if (props.user) {
		return (
			<Button>
				<SignInAltSolid color="currentColor" />
				<span> Log in </span>
			</Button>
		);
	}
	return (
		<Button>
			<ShoppingCartSolid color="currentColor" />
			<span> Cart </span>
		</Button>
	);
};

NavActions.propTypes = {
	user: PropTypes.bool,
};

export { NavActions };
