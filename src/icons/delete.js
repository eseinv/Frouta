import React from 'react';
import PropTypes from 'prop-types';

const Delete = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width="357" height="357">
		<path
			d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"
			fill={props.color}
		/>
	</svg>
);

Delete.propTypes = {
	color: PropTypes.string,
};

export { Delete };
