import React from 'react';
import PropTypes from 'prop-types';

const GalleryPreview = props => {
	let showme;
	if (props.currentItem === null) {
		showme = <div className="text-info font-italic">Click on an item!</div>;
	} else {
		showme = props.currentItem;
	}
	return <div className="col-8 border rounded p-4">{showme}</div>;
};

GalleryPreview.propTypes = {
	currentItem: PropTypes.string,
};

export default GalleryPreview;
