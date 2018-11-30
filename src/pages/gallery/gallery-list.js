import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem } from './gallery-item';

const GalleryList = props => (
	<div className="col-2">
		<div className="btn-group-vertical w-100">
			<GalleryItem
				list={props.itemList}
				select={props.selectItem}
				currentItem={props.currentItem}
			/>
		</div>
	</div>
);

GalleryList.propTypes = {
	itemList: PropTypes.array,
	selectItem: PropTypes.func,
	currentItem: PropTypes.string,
};

export { GalleryList };
