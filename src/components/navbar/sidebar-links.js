import React from 'react';
import PropTypes from 'prop-types';
import { SideBarLink } from './style';

const url = window.location.href;
const baseUrl = `${window.location.protocol}//${window.location.host}`;
const page = url.substring(baseUrl.length);

export const SidebarLinks = props => (
	<React.Fragment>
		<SideBarLink
			onClick={props.hideMenu}
			className="btn mt-5"
			active={
				page.includes('/product') || page === '/' ? 'true' : 'false'
			}
			to="/"
		>
			Προϊόντα
		</SideBarLink>

		<SideBarLink
			onClick={props.hideMenu}
			className="btn"
			active={page === '/partners' ? 'true' : 'false'}
			to="/partners"
		>
			Συνεργάτες
		</SideBarLink>

		<SideBarLink
			onClick={props.hideMenu}
			className="btn"
			active={page === '/contact' ? 'true' : 'false'}
			to="/contact"
		>
			Φάρμα
		</SideBarLink>

		<SideBarLink
			onClick={props.hideMenu}
			className="btn"
			active={page === '/info' ? 'true' : 'false'}
			to="/info"
		>
			Πεστίλη
		</SideBarLink>
	</React.Fragment>
);

SidebarLinks.propTypes = {
	hideMenu: PropTypes.func,
};
