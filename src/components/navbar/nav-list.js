import React from 'react';
import { ButtonLink } from './style';

const NavLi = () => {
	const current = window.location.href;
	const page = current.substring(current.length, 21);

	return (
		<div className="row h-100 align-items-center d-flex justify-content-around justify-content-lg-start">
			<ButtonLink
				className="ml-3 btn"
				active={
					page.includes('/product') || page === '/' ? 'true' : 'false'
				}
				to="/"
			>
				Προϊόντα
			</ButtonLink>

			<ButtonLink
				className="ml-3 btn"
				active={page === '/partners' ? 'true' : 'false'}
				to="/partners"
			>
				Συνεργάτες
			</ButtonLink>

			<ButtonLink
				className="ml-3 btn"
				active={page === '/contact' ? 'true' : 'false'}
				to="/contact"
			>
				Επικοινωνία
			</ButtonLink>

			<ButtonLink
				className="ml-3 btn"
				active={page === '/info' ? 'true' : 'false'}
				to="/info"
			>
				Η Πεστίλη
			</ButtonLink>
		</div>
	);
};

export { NavLi };
