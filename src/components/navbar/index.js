import React from 'react';
import PropTypes from 'prop-types';
import { NavLi } from './nav-list';
import { NavBrand } from './nav-brand';
import { NavActions } from './nav-actions';
import { Button, LogOut, Container, Nav } from './style';

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
						<NavActions userLogged={props.userLogged} />
					</Button>
					{props.userLogged && localStorage.getItem('token') && (
						<LogOut onClick={() => props.changeLogState(false)}>
							Έξοδος
						</LogOut>
					)}
				</div>
			</Nav>
		</div>
	</Container>
);

NavBar.propTypes = {
	userLogged: PropTypes.bool,
	changeLogState: PropTypes.func,
};

export { NavBar };
