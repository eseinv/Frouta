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
						style={{ maxHeight: 150 }}
						src={`https://api.farmapalatia.gr/images/articles/${
							props.image
						}`}
						alt="img"
					/>
				</div>
				<div className="col-8">
					<H1>{props.name}</H1>

					{props.text.length > maxInfoChars ? (
						<P
							dangerouslySetInnerHTML={{
								__html: props.text.substring(
									0,
									maxInfoChars - 3,
								),
							}}
						/>
					) : (
						<P dangerouslySetInnerHTML={{ __html: props.text }} />
					)}
				</div>
			</div>
		</ArticleCard>
	);
};

EachArticle.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
	image: PropTypes.string,
};
