import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLi } from './nav-list';
import { NavBrand } from './nav-brand';
import { NavActions } from './nav-actions';

const Container = styled.nav`
	min-height: 80px;
`;
const Nav = styled.div`
	background-color: #587c34;
`;

const Button = styled.button`
	background: transparent;
	border: none;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		cursor: pointer;
	}
`;

const NavBar = props => (
	<Container>
		<div className="container-fluid">
			<Nav className="row text-center text-lg-left">
				<div className="col-12 col-lg-4 align-self-center">
					<NavBrand />
				</div>
				<div className="col-12 col-lg-5">
					<NavLi />
				</div>
				<div className="col-12 col-lg-3 align-self-center">
					<Button
						onClick={() => props.toggleLog()}
						className="p-3 p-lg-0"
					>
						<NavActions user={props.logState} />
					</Button>
				</div>
			</Nav>
		</div>
	</Container>
);

NavBar.propTypes = {
	logState: PropTypes.bool,
	toggleLog: PropTypes.func,
};

export { NavBar };
