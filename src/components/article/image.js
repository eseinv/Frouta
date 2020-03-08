import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

const ImgLoader = ({ url }) => {
	const [loading, setLoading] = useState(true);
	return (
		<div>
			<img src={url} onLoad={() => setLoading(false)} alt="some alt" />
			{loading && (
				<Loader type="Oval" color="#27ae60" height={80} width={80} />
			)}
		</div>
	);
};

export { ImgLoader };
