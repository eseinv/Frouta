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

export const CartAction = styled.span`
	color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
	&:hover {
		color: #fff;
	}
`;

export const ActionWrap = styled.div`
	display: inline-block;
`;

export const Fp = styled.img`
	max-width: 90%;
`;
