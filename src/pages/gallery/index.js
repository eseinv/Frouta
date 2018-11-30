import React, { Component } from 'react';
import { GalleryList } from './gallery-list';
import GalleryPreview from './gallery-preview';
import { GalleryItems } from '../../jsonfile';

class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			itemList: GalleryItems,
			currentItem: null,
		};
	}
	selectItem = item => {
		this.setState({ currentItem: item });
	};

	render() {
		return (
			<div className="gallery card p-3 mt-3 container">
				<h1 className="display-5 text-capitalize"> gallery browser </h1>
				<p>
					Select an item and it will appear in the gallery preview.{' '}
				</p>
				<div className="row">
					<GalleryList
						selectItem={this.selectItem}
						itemList={this.state.itemList}
						currentItem={this.state.currentItem}
					/>
					<GalleryPreview currentItem={this.state.currentItem} />
				</div>
			</div>
		);
	}
}

export { Gallery };
