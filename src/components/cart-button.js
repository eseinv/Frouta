import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	border: 1px solid #373535;
	border-radius: 3px;
	background-color: #F6F8F8
	font-weight: bold
	width: 40px
	height: 27px;
	&:focus {
		outline: none;
	}
`;

const CartButton = props => (
	<Button
		onClick={() =>
			props.handleCartChange(props.type === 'minus' ? 'minus' : 'plus')
		}
	>
		{props.children}
	</Button>
);

CartButton.propTypes = {
	children: PropTypes.string,
	handleCartChange: PropTypes.func,
	type: PropTypes.string,
};

export { CartButton };
