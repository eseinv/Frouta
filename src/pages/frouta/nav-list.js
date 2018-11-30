import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const active = 'rgba(255,255,255, 1)';
const inactive = 'rgba(255,255,255, 0.5)';
const Button = styled(Link)`
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

const NavItems = [
	{ name: 'Αρχική', link: '/frouta/' },
	{ name: 'Τιμοκατάλογος', link: '/frouta/pricelist' },
	{ name: 'Επικοινωνία', link: '/frouta/contact' },
];

const NavLi = () => {
	const current = window.location.href;
	const page = current.substring(current.length, 28);
	return (
		<div className="row h-100 align-items-center d-flex">
			<Button
				className="ml-3 btn"
				active={page === '/' ? 'true' : 'false'}
				to="/frouta/"
			>
				Αρχική
			</Button>

			<Button
				className="ml-3 btn"
				active={page === '/pricelist' ? 'true' : 'false'}
				to="/frouta/pricelist"
			>
				Τιμοκατάλογος
			</Button>

			<Button
				className="ml-3 btn"
				active={page === '/contact' ? 'true' : 'false'}
				to="/frouta/contact"
			>
				Επικοινωνία
			</Button>
		</div>
	);
};

const NavList = () => <div className="row h-100">{NavLi}</div>;

export { NavLi };
