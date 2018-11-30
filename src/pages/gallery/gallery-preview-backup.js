import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const figureOutImage = props => {
	let img;
	switch (props) {
		case 'Item 1':
			img = 'https://randomuser.me/api/portraits/women/79.jpg';
			break;
		case 'Item 2':
			img = 'https://randomuser.me/api/portraits/women/14.jpg';
			break;
		case 'Item 3':
			img = 'https://randomuser.me/api/portraits/women/70.jpg';
			break;
		default:
			img = 'none';
	}
	return img;
};

const Image = styled.div`
	background-color: red;
	background-image: url(${props => figureOutImage(props.image)});
`;

const GalleryPreview = props => (
	<Image image={props.currentItem} className="col-8">
		{props.currentItem}
	</Image>
);

GalleryPreview.propTypes = {
	currentItem: PropTypes.string,
};

export { GalleryPreview };
