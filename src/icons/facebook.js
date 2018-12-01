import React from 'react';
import PropTypes from 'prop-types';

const Facebook = props => (
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width="25px"
	>
		<path
			fill={props.color}
			d="M55 5.893v43.214A5.894 5.894 0 0 1 49.107 55H38.635V33.246h7.44l1.068-8.3h-8.508v-5.3c0-2.406.663-4.039 4.113-4.039h4.4V8.189a59.088 59.088 0 0 0-6.408-.331c-6.335 0-10.681 3.867-10.681 10.975v6.126h-7.47v8.3h7.477V55H5.893A5.894 5.894 0 0 1 0 49.107V5.893A5.894 5.894 0 0 1 5.893 0h43.214A5.894 5.894 0 0 1 55 5.893z"
		/>
	</svg>
);

Facebook.propTypes = {
	color: PropTypes.string,
};

export { Facebook };
