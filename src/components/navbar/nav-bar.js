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

const LogOut = styled.button`
	background: transparent;
	border: none;
	padding-left: 30px;
	color: rgba(255, 255, 255, 0.5);
	&:hover {
		color: #fff;
		cursor: pointer;
	}
	&:active {
		outline: none;
	}
	transition: color 0.2s ease;
`;

const NavBar = props => (
	<Container>
		<div className="container-fluid">
			<Nav className="row text-center text-lg-left">
				<div className="col-sm-2 offset-md-1 col-md-2 offset-lg-0 col-lg-4 align-self-center">
					<NavBrand />
				</div>
				<div className="navlist col-sm-5 col-md-5 col-lg-5">
					<NavLi />
				</div>
				<div className="navactions col-sm-5 col-md-4 col-lg-3 align-self-center">
					<Button
						to={props.userLogged ? '/cart' : '/login'}
						className="p-3 p-lg-0"
					>
						<NavActions
							userLogged={props.userLogged}
							logUserOut={props.logUserOut}
						/>
					</Button>
					{props.userLogged && (
						<LogOut onClick={() => props.logUserOut()}>
							Log out
						</LogOut>
					)}
				</div>
			</Nav>
		</div>
	</Container>
);

NavBar.propTypes = {
	userLogged: PropTypes.bool,
	logUserOut: PropTypes.func,
};

export { NavBar };
