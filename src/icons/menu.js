import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="15px">
		<path
			d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
			fill={props.color}
		/>
	</svg>
);

Menu.propTypes = {
	color: PropTypes.string,
};

export { Menu };
