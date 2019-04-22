import React from 'react';
import ImageGallery from 'react-image-gallery';
import Loader from 'react-loader-spinner';
import ImagesLoaded from 'react-images-loaded';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
	state = { loading: true };
	isLoaded = () => {
		this.setState({ loading: false });
	};
	render() {
		return (
			<div className="container mt-2 mb-4 px-5">
				{this.state.loading ? (
					<div>
						<div className="d-flex justify-content-center">
							<Loader
								type="Oval"
								color="#27ae60"
								height={80}
								width={80}
							/>
						</div>
						<p className="text-center">Οι φωτογραφίες φορτώνουν</p>
					</div>
				) : null}
				<ImagesLoaded done={this.isLoaded}>
					<ImageGallery
						items={this.props.images}
						infinite
						showThumbnails={false}
						showPlayButton={false}
						showFullscreenButton={false}
						showBullets={!this.state.loading}
						autoPlay
						showNav={false}
						slideDuration={2700}
					/>
				</ImagesLoaded>
			</div>
		);
	}
}

Gallery.propTypes = {
	images: PropTypes.array,
};

export default Gallery;
