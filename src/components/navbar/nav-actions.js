import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SignInAltSolid } from '../../icons/sign-in-alt-solid';
import { ShoppingCartSolid } from '../../icons/shopping-cart-solid';

const CartAction = styled.span`
	color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
	&:hover {
		color: #fff;
	}
`;

const ActionWrap = styled.div`
	display: inline-block;
`;

const NavActions = props => {
	const current = window.location.href;
	const page = current.substring(current.length, 21);
	if (!props.userLogged) {
		return (
			<div>
				<SignInAltSolid color="#fff" />
				<CartAction active={page === '/login'}>Είσοδος</CartAction>
			</div>
		);
	}
	return (
		<React.Fragment>
			<ActionWrap>
				<ShoppingCartSolid color="currentColor" />
				<span> Καλάθι </span>
			</ActionWrap>
		</React.Fragment>
	);
};

NavActions.propTypes = {
	userLogged: PropTypes.bool,
};

export { NavActions };
