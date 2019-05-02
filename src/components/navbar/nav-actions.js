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
	const url = window.location.href;
	const baseUrl = `${window.location.protocol}//${window.location.host}`;
	const page = url.substring(baseUrl.length);
	if (!props.userLogged) {
		return (
			<div>
				<SignInAltSolid color="#fff" />
				<CartAction
					active={page === '/login'}
					className="d-xs-none d-sm-none d-md-none d-lg-inline-block"
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
