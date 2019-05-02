import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
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

const active = 'rgba(255,255,255, 1)';
const inactive = 'rgba(255,255,255, 0.5)';

export const ButtonLink = styled(Link)`
	position: relative;
	color: ${props => (props.active === 'true' ? active : inactive)};
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		opacity: ${props => (props.active === 'true' ? 1 : 0)};
		background: #fff;
		transition: opacity 0.2s ease;
	}
	&:hover {
		color: #fff;
	}
	&:focus {
		box-shadow: none;
	}
`;

export const Container = styled.nav`
	min-height: 80px;
`;
export const Nav = styled.div`
	background-color: #587c34;
`;

export const LogOut = styled.button`
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

export const LogOutBurger = styled.button`
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.5);
	padding-top: 0.5rem;
	&:hover {
		color: #fff;
		cursor: pointer;
	}
	&:active {
		outline: none;
	}
	transition: color 0.2s ease;
`;

export const CartAction = styled.span`
	color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
	&:hover {
		color: #fff;
	}
`;

export const ActionWrap = styled.div`
	display: inline-block;
`;

export const FpBig = styled.img`
	max-width: 90%;
	@media only screen and (max-width: 1022px) {
		display: none;
	}
`;
export const FpSmall = styled.img`
	max-width: 35%;
	@media only screen and (min-width: 1022px) {
		display: none;
	}
	@media only screen and (min-width: 1022px) {
		max-width: 40%;
	}
`;

export const NavActionsWrap = styled.div`
	@media only screen and (max-width: 1055px) {
		display: none;
	}
`;

export const NavActionsBurger = styled.div`
	background: #587c34;
	position: absolute;
	top: 54.7667px;
	right: 10px;
	z-index: 9999;
	padding: 7px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border: 1px solid #fff;
	border-top-width: 0;
	@media only screen and (min-width: 1055px) {
		display: none;
	}
`;

export const BurgerButton = styled.button`
	position: absolute;
	top: 0.5rem;
	right: 30px;
	background: #587c34;
	color: #fff;
	background: transparent;
	&:focus {
		outline: none;
	}
	@media only screen and (min-width: 1055px) {
		display: none;
		top: 0.5rem;
	}
	@media only screen and (min-width: 729px) {
		top: 1rem;
	}
	@media only screen and (min-width: 991px) {
		top: 1.5rem;
	}
	@media only screen and (min-width: 1022px) {
		top: 0.5rem;
	}
`;

export const LoginButton = styled(Link)`
	position: absolute;
	top: 0.5rem;
	right: 30px;
	background: #587c34;
	color: #fff;
	background: transparent;
	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}
	@media only screen and (min-width: 1055px) {
		display: none;
		top: 0.5rem;
	}
	@media only screen and (min-width: 729px) {
		top: 1rem;
	}
	@media only screen and (min-width: 991px) {
		top: 1.5rem;
	}
	@media only screen and (min-width: 1022px) {
		top: 0.5rem;
	}
`;

export const NavListWrap = styled.div`
	@media only screen and (min-width: 1022px) {
		font-size: 50px;
	}
`;
