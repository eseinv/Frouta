import React from 'react';
import { ButtonLink, NavListWrap } from './style';

const NavLi = () => {
	const url = window.location.href;
	const baseUrl = `${window.location.protocol}//${window.location.host}`;
	const page = url.substring(baseUrl.length);

	return (
		<NavListWrap className="row navlist h-100 align-items-center d-flex justify-content-around justify-content-lg-start">
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
				Φάρμα
			</ButtonLink>

			<ButtonLink
				className="ml-3 btn"
				active={page === '/info' ? 'true' : 'false'}
				to="/info"
			>
				Πεστίλη
			</ButtonLink>
		</NavListWrap>
	);
};

export { NavLi };
