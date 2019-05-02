import React from 'react';
import PropTypes from 'prop-types';
import { NavLi } from './nav-list';
import { NavBrand } from './nav-brand';
import { NavActions } from './nav-actions';
import { ShoppingCartSolid } from '../../icons/shopping-cart-solid';

import {
	Button,
	LogOut,
	Container,
	Nav,
	NavActionsWrap,
	NavActionsBurger,
	BurgerButton,
	LogOutBurger,
	LoginButton,
} from './style';

class NavBar extends React.Component {
	state = { toggled: false };
	toggleMenu = () => {
		this.setState({ toggled: !this.state.toggled });
	};

	hideMenu = () => {
		this.setState({ toggled: false });
	};

	logOut = () => {
		this.props.changeLogState(false);
	};

	componentDidMount() {
		return this.hideMenu();
	}
	render() {
		return (
			<Container>
				<div className="container-fluid">
					<Nav className="row text-center text-lg-left">
						<div className="col-sm-3 col-md-3 col-lg-4 align-self-center">
							<NavBrand />
						</div>
						<div className="navlist col-sm-7 col-md-7 col-lg-5">
							<NavLi />
						</div>
						<NavActionsWrap className="navactions col-sm-2 col-md-1 col-lg-3 align-self-center">
							<Button
								to={this.props.userLogged ? '/cart' : '/login'}
								className="p-3 p-lg-0"
							>
								<NavActions
									userLogged={this.props.userLogged}
								/>
							</Button>
							{this.props.userLogged &&
								localStorage.getItem('token') && (
									<React.Fragment>
										<Button
											to="/menu"
											className="ml-3 p-3 p-lg-0"
										>
											<span>Μενού</span>
										</Button>
										<LogOut
											onClick={() =>
												this.props.changeLogState(false)
											}
										>
											Έξοδος
										</LogOut>
									</React.Fragment>
								)}
						</NavActionsWrap>
						{!this.props.userLogged && (
							<LoginButton
								to="/login"
								className="btn col-2"
								onClick={this.toggleMenu}
							>
								{' '}
								Είσοδος{' '}
							</LoginButton>
						)}
						{this.props.userLogged && (
							<BurgerButton
								className="btn col-2"
								onClick={this.toggleMenu}
							>
								{' '}
								Μενού{' '}
							</BurgerButton>
						)}
						{this.props.userLogged &&
							localStorage.getItem('token') &&
							this.state.toggled && (
								<NavActionsBurger className="text-center">
									<Button
										onClick={this.hideMenu}
										to="/cart"
										className="d-block p-2"
									>
										<ShoppingCartSolid color="#fff" />
										<span className="text-white">
											{' '}
											Καλάθι{' '}
										</span>
									</Button>
									<Button
										onClick={this.hideMenu}
										to="/menu"
										className="d-block p-2"
									>
										<span>Μενού</span>
									</Button>
									<LogOutBurger onClick={this.logOut}>
										Έξοδος{' '}
									</LogOutBurger>
								</NavActionsBurger>
							)}
					</Nav>
				</div>
			</Container>
		);
	}
}

NavBar.propTypes = {
	userLogged: PropTypes.bool,
	changeLogState: PropTypes.func,
};

export { NavBar };
