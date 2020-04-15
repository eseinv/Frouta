import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink, NavListWrap, FarmaHover, FarmaHoverLi } from './style';

const NavLi = props => {
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
				onMouseEnter={() => props.showFarmaHover(true)}
				onMouseLeave={() => props.showFarmaHover(false)}
				className="ml-3 btn"
				active={
					page === '/contact' || page.includes('article')
						? 'true'
						: 'false'
				}
				to="/contact"
			>
				Φάρμα
			</ButtonLink>
			{props.showExpandedMenu && (
				<FarmaHover
					onMouseEnter={() => props.showFarmaHover(true)}
					onMouseLeave={() => props.showFarmaHover(false)}
				>
					<FarmaHoverLi to="/articles">Άρθρα</FarmaHoverLi>
					<FarmaHoverLi to="/">Ιστορία</FarmaHoverLi>
					<FarmaHoverLi to="/contact">Επικοινωνία</FarmaHoverLi>
				</FarmaHover>
			)}

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

NavLi.propTypes = {
	showFarmaHover: PropTypes.func,
	showExpandedMenu: PropTypes.bool,
};

export { NavLi };
