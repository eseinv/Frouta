import React from 'react';
import PropTypes from 'prop-types';
import { EachArticle } from './each-article';

export default class ArticleList extends React.Component {
	state = { articles: [] };

	fetchArticles = () => {
		const token = localStorage.getItem('token');
		fetch(`https://api.farmapalatia.gr/article`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(articles => this.setState({ articles }))
			.catch(error => console.error('Error:', error));
	};

	componentDidMount() {
		this.fetchArticles();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					{this.state.articles.map((article, index) => (
						<div
							className="col-md-6 col-sm-12"
							key={index}
							onClick={() =>
								this.props.history.push(`article/${article.id}`)
							}
							onKeyDown={() =>
								this.props.history.push(`article/${article.id}`)
							}
						>
							<EachArticle
								id={article.id}
								name={article.name}
								text={article.text}
								image={article.image}
							/>
						</div>
					))}
				</div>
			</div>
		);
	}
}

ArticleList.propTypes = {
	history: PropTypes.object,
};
