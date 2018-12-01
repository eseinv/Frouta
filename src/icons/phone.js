import React from 'react';
import PropTypes from 'prop-types';

const Phone = props => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="25px"
	>
		<path
			fill={props.color}
			d="M49.107 0H5.893A5.893 5.893 0 0 0 0 5.893v43.214A5.893 5.893 0 0 0 5.893 55h43.214A5.893 5.893 0 0 0 55 49.107V5.893A5.893 5.893 0 0 0 49.107 0zM11.54 47.143a1.842 1.842 0 0 1-1.794-1.427L7.9 37.736a1.842 1.842 0 0 1 1.069-2.107l8.594-3.683a1.842 1.842 0 0 1 2.151.527l3.805 4.651a28.462 28.462 0 0 0 13.6-13.6l-4.651-3.805a1.842 1.842 0 0 1-.527-2.151l3.683-8.594A1.842 1.842 0 0 1 37.735 7.9l7.98 1.841a1.841 1.841 0 0 1 1.428 1.794A35.6 35.6 0 0 1 11.54 47.143z"
		/>
	</svg>
);

Phone.propTypes = {
	color: PropTypes.string,
};

export { Phone };
