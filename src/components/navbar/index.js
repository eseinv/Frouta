import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLi } from './nav-list';
import { NavBrand } from './nav-brand';
import { NavActions } from './nav-actions';

const Nav = styled.nav`
	background-color: #587c34;
	height: 80px;
`;

const Button = styled.div`
	&:hover {
		color: #fff;
		cursor: pointer;
	}
`;

const NavBar = props => (
	<div className="container-fluid">
		<Nav className="row">
			<div className="col-4">
				<NavBrand />
			</div>
			<div className="col-5">
				<NavLi />
			</div>
			<Button
				onClick={() => props.toggleLog()}
				className="col-3 d-flex h-100 align-items-center"
			>
				<NavActions user={props.logState} />
			</Button>
		</Nav>
	</div>
);

NavBar.propTypes = {
	logState: PropTypes.bool,
	toggleLog: PropTypes.func,
};

export { NavBar };
