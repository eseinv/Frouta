import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SignInAltSolid } from '../../icons/sign-in-alt-solid';
import { ShoppingCartSolid } from '../../icons/shopping-cart-solid';

const CartAction = styled.span`
	color: ${props => (props.active ? '#62534b' : '62534bd9')};
	&:hover {
		color: #62534b;
	}
`;

const ActionWrap = styled.div`
	display: inline-block;
`;

const NavActions = props => {
	const url = window.location.href;
	const baseUrl = `${window.location.protocol}//${window.location.host}`;
	const page = url.substring(baseUrl.length);
	if (!props.userLogged) {
		return (
			<div>
				<SignInAltSolid color="#62534bd9" />
				<CartAction
					active={page === '/login'}
					className="d-lg-inline-block text-right"
				>
					Είσοδος
				</CartAction>
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
