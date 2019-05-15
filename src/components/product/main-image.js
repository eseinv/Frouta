import React from 'react';
import PropTypes from 'prop-types';

export const MainImage = props => (
	<img src={props.image} alt="Product Name" className="img-fluid mb-2" />
);

MainImage.propTypes = {
	image: PropTypes.string,
};
