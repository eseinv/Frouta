import React from 'react';
import PropTypes from 'prop-types';
import { MainArticleList } from '../../data/main-article-list';
import { EachArticle } from './each-article';

export default class Article extends React.Component {
	state = {};
	render() {
		return (
			<div className="container">
				<div className="row">
					{MainArticleList.map((article, index) => (
						<div
							className="col-md-6 col-sm-12"
							key={index}
							onClick={() =>
								this.props.history.push(`article/${article.id}`)
							}
							onKeyDown={() => console.log('a')}
						>
							<EachArticle
								id={article.id}
								name={article.name}
								text={article.text}
							/>
						</div>
					))}
				</div>
			</div>
		);
	}
}

Article.propTypes = {
	history: PropTypes.object,
};
