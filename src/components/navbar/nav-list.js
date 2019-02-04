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

const NavLi = () => {
	const current = window.location.href;
	const page = current.substring(current.length, 21);

	return (
		<div className="row h-100 align-items-center d-flex justify-content-around justify-content-lg-start">
			<Button
				className="ml-3 btn"
				active={
					page.includes('/product') || page === '/' ? 'true' : 'false'
				}
				to="/"
			>
				Προϊόντα
			</Button>

			<Button
				className="ml-3 btn"
				active={page === '/contact' ? 'true' : 'false'}
				to="/contact"
			>
				Επικοινωνία
			</Button>

			<Button
				className="ml-3 btn"
				active={page === '/info' ? 'true' : 'false'}
				to="/info"
			>
				Η Πεστίλη
			</Button>
		</div>
	);
};

export { NavLi };
