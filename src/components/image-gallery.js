import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';

const Gallery = props => (
	<div className="container mt-2 mb-4">
		<ImageGallery
			items={props.images}
			infinite
			showThumbnails={false}
			showPlayButton={false}
			showBullets
			autoPlay
			showNav={false}
			slideDuration={3000}
		/>
	</div>
);

Gallery.propTypes = {
	images: PropTypes.array,
};

export { Gallery };
