import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { H1, P, H5, SuggestedCard } from './style';

export default class Article extends React.Component {
	state = {
		articles: [],
		selectedArticle: {},
		suggestedArticles: [],
		loading: true,
	};

	fetchArticles = () => {
		const token = localStorage.getItem('token');
		const selectedArticleId = parseInt(this.props.match.params.id, 0);
		fetch(`https://api.farmapalatia.gr/article`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(articles => this.setState({ articles }))
			.then(() => this.fetchData(selectedArticleId))
			.then(() => this.setState({ loading: false }))
			.catch(error => console.error('Error:', error));
	};

	fetchData = selectedArticleId => {
		const [selectedArticle] = this.state.articles.filter(
			article => article.id === selectedArticleId,
		);

		const suggestedArticles = this.grabNewArticles(selectedArticleId);
		this.setState({ selectedArticle, suggestedArticles });

		this.setState({ selectedArticle });
	};

	grabNewArticles = exceptThisId => {
		const suggestedArray = [];
		this.state.articles.map(article =>
			article.id !== exceptThisId ? suggestedArray.push(article) : null,
		);
		suggestedArray.reverse();
		return suggestedArray;
	};

	isLoaded = () => {
		this.setState({ loading: false });
	};

	updateSelectedArticle = article => {
		this.props.history.push(`${article.id}`);
		this.fetchData(article.id);
	};

	componentDidMount() {
		this.fetchArticles();
	}

	render() {
		if (!this.state.loading) {
			return (
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-6 col-sm-12 mr-4">
							<H1 className="mt-3">
								{this.state.selectedArticle.name}
							</H1>
							<img
								className="img-responsive d-block my-3"
								style={{ maxHeight: 350, maxWidth: 540 }}
								src={`https://api.farmapalatia.gr/images/articles/${
									this.state.selectedArticle.image
								}`}
								alt="img"
							/>
							<P
								dangerouslySetInnerHTML={{
									__html: this.state.selectedArticle.text,
								}}
							/>
						</div>

						<div className="col-md-3 col-sm-12 mt-5 border-left">
							<a href="/articles" className="text-primary">
								Όλα τα άρθρα
							</a>
							{this.state.suggestedArticles.map(
								(article, index) => (
									<SuggestedCard
										key={index}
										onClick={() =>
											this.updateSelectedArticle(article)
										}
									>
										<H5 className="mt-1">{article.name}</H5>
										<img
											className="img img-responsive d-block my-3"
											style={{
												width: 200,
												maxHeight: 100,
											}}
											src={`https://api.farmapalatia.gr/images/articles/${
												article.image
											}`}
											alt="img"
										/>
										<P
											className="small"
											dangerouslySetInnerHTML={{
												__html: article.text.substring(
													0,
													180,
												),
											}}
										/>
									</SuggestedCard>
								),
							)}
						</div>
					</div>
				</div>
			);
		}
		return (
			<>
				<div className="d-flex justify-content-center mt-4">
					<Loader
						type="Oval"
						color="#27ae60"
						height={80}
						width={80}
					/>
				</div>
				<p className="text-center">Παρακαλώ περιμένετε</p>
			</>
		);
	}
}

Article.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
};
