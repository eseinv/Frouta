import React from 'react';
import PropTypes from 'prop-types';
import { ArticleCard, H1, P } from './style';

export const EachArticle = props => {
	const maxInfoChars = 210;
	return (
		<ArticleCard className="p-3 mt-2">
			<div className="row">
				<div className="col-4 d-flex align-self-center">
					<img
						className="img-responsive img-thumbnail"
						src="https://picsum.photos/250/150"
						alt="img"
					/>
				</div>
				<div className="col-8">
					<H1>{props.name}</H1>
					<P>
						{props.text.length > maxInfoChars
							? `${props.text.substring(0, maxInfoChars - 3)}...`
							: props.text}
					</P>
				</div>
			</div>
		</ArticleCard>
	);
};

EachArticle.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
};
