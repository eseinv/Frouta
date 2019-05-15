import React from 'react';
import PropTypes from 'prop-types';
import { Preview } from './style';

export const SmallImage = props => (
	<Preview
		src={props.image}
		alt="Product Name"
		className="img-fluid"
		active={props.active === true}
	/>
);

SmallImage.propTypes = {
	image: PropTypes.string,
	active: PropTypes.bool,
};
