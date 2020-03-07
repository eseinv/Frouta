import React from 'react';

export const Video = () => (
	// <YouTube videoId="oZVjg31fcyM" opts={opts} onReady={this.onReady} />
	<div className="d-flex justify-content-center">
		<iframe
			title="video"
			src="https://www.youtube.com/embed/aOkC2rinNuo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1&loop=1"
			width="1024"
			height="526"
			frameBorder="0"
			allowFullScreen
			allow="autoplay"
		/>
	</div>
);
