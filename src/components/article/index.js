import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { MainArticleList } from '../../data/main-article-list';
import { H1, P, H5, SuggestedCard } from './style';

export default class Article extends React.Component {
	state = { selectedArticle: {}, suggestedArticles: [], loading: false };

	fetchData = () => {
		const selectedArticleId = parseInt(this.props.match.params.id, 0);
		const [selectedArticle] = MainArticleList.filter(
			article => article.id === selectedArticleId,
		);
		this.grabNewArticles(selectedArticleId);
		this.setState({ selectedArticle });
	};

	grabNewArticles = exceptThisId => {
		const suggestedArray = this.state.suggestedArticles;
		MainArticleList.map(article =>
			article.id !== exceptThisId ? suggestedArray.push(article) : null,
		);
		suggestedArray.reverse();
		return this.setState({ suggestedArticles: suggestedArray });
	};

	isLoaded = () => {
		this.setState({ loading: false });
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		if (!this.state.loading) {
			return (
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-6 mr-4">
							<H1 className="mt-3">
								{this.state.selectedArticle.name}
							</H1>
							<img
								className="img img-fluid d-block my-3"
								src="https://picsum.photos/540/350"
								alt="img"
							/>
							<P>{this.state.selectedArticle.text}</P>
						</div>

						<div className="col-3 mt-5 border-left">
							{this.state.suggestedArticles.map(
								(article, index) => (
									<SuggestedCard key={index}>
										<H5 className="mt-1">{article.name}</H5>
										<img
											className="img img-responsive d-block my-3"
											src="https://picsum.photos/210/100"
											alt="img"
										/>
										<P className="small">
											{article.text.substring(0, 65)}...
										</P>
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
};
