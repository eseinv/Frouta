import React from 'react';
import PropTypes from 'prop-types';
import { NavLi } from './nav-list';
import { NavBrand } from './nav-brand';
import { NavActions } from './nav-actions';
import { ShoppingCartSolid } from '../../icons/shopping-cart-solid';
import { SidebarLinks } from './sidebar-links';
import { SignInAltSolid } from '../../icons/sign-in-alt-solid';
import { Menu } from '../../icons/menu';

import {
	Button,
	LogOut,
	Container,
	Nav,
	NavActionsWrap,
	NavActionsBurger,
	LogOutBurger,
	BurgerButton,
	CloseButton,
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
						<div className="col-sm-6 col-md-5 col-lg-4 align-self-center">
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

						{this.state.toggled && (
							<NavActionsBurger className="text-center">
								<CloseButton onClick={this.hideMenu}>
									X
								</CloseButton>

								<SidebarLinks hideMenu={this.hideMenu} />

								<hr className="bg-white w-75" />
								{!this.props.userLogged && (
									<Button
										to="/login"
										className="d-block p-2"
										onClick={this.hideMenu}
									>
										<SignInAltSolid color="#62534bd9" />{' '}
										Είσοδος
									</Button>
								)}
								{this.props.userLogged &&
									localStorage.getItem('token') && (
										<React.Fragment>
											<Button
												to="/cart"
												className="d-block p-2"
												onClick={this.hideMenu}
											>
												<ShoppingCartSolid color="#fff" />
												<span className="text-white">
													{' '}
													Καλάθι{' '}
												</span>
											</Button>
											<Button
												to="/menu"
												className="d-block p-2"
												onClick={this.hideMenu}
											>
												<span>Μενού</span>
											</Button>

											<LogOutBurger onClick={this.logOut}>
												Έξοδος
											</LogOutBurger>
										</React.Fragment>
									)}
							</NavActionsBurger>
						)}
						<BurgerButton onClick={this.toggleMenu}>
							<Menu />
						</BurgerButton>
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
