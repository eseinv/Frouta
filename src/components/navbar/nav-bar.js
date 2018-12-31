import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavLi } from './nav-list';
import { NavBrand } from './nav-brand';
import { NavActions } from './nav-actions';

const Container = styled.nav`
	min-height: 80px;
`;
const Nav = styled.div`
	background-color: #587c34;
`;

const Button = styled(Link)`
	background: transparent;
	border: none;
	text-decoration: none;
	color: #fff
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
		cursor: pointer;
		text-decoration: none;
	}
`;

const NavBar = props => (
	<Container>
		<div className="container-fluid">
			<Nav className="row text-center text-lg-left">
				<div className="col-12 col-sm-2 offset-md-1 col-md-2 offset-lg-0 col-lg-4 align-self-center">
					<NavBrand />
				</div>
				<div className="col-12 col-sm-6 col-md-6 col-lg-5">
					<NavLi />
				</div>
				<div className="col-12 col-sm-3 col-md-3 col-lg-3 align-self-center">
					<Button
						to={props.userLogged ? '/checkout' : '/login'}
						className="p-3 p-lg-0"
					>
						<NavActions logState={props.userLogged} />
					</Button>
				</div>
			</Nav>
		</div>
	</Container>
);

NavBar.propTypes = {
	userLogged: PropTypes.bool,
};

export { NavBar };
