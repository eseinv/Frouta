import styled from 'styled-components';
import { Link } from 'react-router-dom';

const active = '#62534b';
const inactive = '#62534bd9';

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
		background: #62534b;
		transition: opacity 0.2s ease;
	}
	&:hover {
		color: #62534b;
	}
	&:focus {
		box-shadow: none;
	}

	@media only screen and (max-width: 1060px) {
		display: none;
	}
`;

export const SideBarLink = styled(Link)`
	color: #fff;
	display: block;
	padding: 0.5em 0;
	&:hover {
		background: #9e8e86;
		color: #fff;
	}
`;

export const Container = styled.nav`
	min-height: 80px;
`;
export const Nav = styled.div`
	background-image: linear-gradient(to right, #ececec38, #ececec);
`;

export const LogOut = styled.button`
	background: transparent;
	border: none;
	padding-left: 30px;
	color: #62534bd9;
	&:hover {
		color: #62534b;
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
		color: #62534b;
		cursor: pointer;
	}
	&:active {
		outline: none;
	}
	transition: color 0.2s ease;
`;

export const CartAction = styled.span`
	color: ${props => (props.active ? '#62534b' : '62534bd9')};
	&:hover {
		color: #62534b;
	}
`;

export const ActionWrap = styled.div`
	display: inline-block;
`;

export const FpBig = styled.img`
	max-width: 90%;
	${'' /* @media only screen and (max-width: 1022px) {
		display: none;
	} */}
`;

export const NavActionsWrap = styled.div`
	@media only screen and (max-width: 1060px) {
		display: none;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	right: 0;
	background: #9e8e86;
	padding: .3em .7em;
	margin: .7em;
	text-align: right;
	border: none
	color: #fff;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
		background: #9e8e86c1;
	}
`;

export const Button = styled(Link)`
	background: transparent;
	border: none;
	text-decoration: none;
	color: #62534bd9;
	&:focus {
		outline: none;
	}
	&:hover {
		background: #9e8e86;
		color: #62534b;
		cursor: pointer;
		text-decoration: none;
	}
	@media only screen and (max-width: 1060px) {
		color: #fff;
		&:hover {
			color: #fff;
		}
	}
	@media only screen and (min-width: 1060px) {
		&:hover {
			background: transparent;
		}
	}
`;

export const NavActionsBurger = styled.div`
	background: #7f726c;
	position: fixed;
	color: #fff;
	top: 0;
	right: 10px;
	height: 100%;
	width: auto;
	z-index: 99999;
	padding: 1em 2em;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border: 1px solid #fff;
	border-top-width: 0;
	transition: all 3s ease;
	@media only screen and (min-width: 1060px) {
		display: none;
	}
	@media only screen and (max-width: 820px) {
		width: auto;
	}
	@media only screen and (max-width: 820px) {
		width: auto;
	}
	@media only screen and (max-width: 600px) {
		width: 10%;
		padding: 0;
	}
	@media only screen and (max-width: 450px) {
		width: 90%;
		padding: 0;
	}
`;

export const BrandWrapper = styled.div`
	@media only screen and (max-width: 575px) {
		margin-left: 0 !important;
		padding-left: 0 !important;
	}
`;

export const BurgerButton = styled.button`
	background: transparent;
	border: none;
	position: absolute;
	top: 0;
	right: 0;
	padding: 0.9em 2em;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
	@media only screen and (min-width: 1060px) {
		display: none;
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
	@media only screen and (min-width: 1060px) {
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
	@media only screen and (min-width: 1060px) {
		display: none;
	}
`;
