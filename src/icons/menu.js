import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15">
		<g fill={props.color} stroke="#62534B">
			<rect width="21" height="2" x=".5" y=".5" rx=".5" />
			<rect width="21" height="2" x=".5" y="6.5" rx=".5" />
			<rect width="21" height="2" x=".5" y="12.5" rx=".5" />
		</g>
	</svg>
);

Menu.propTypes = {
	color: PropTypes.string,
};

export { Menu };
