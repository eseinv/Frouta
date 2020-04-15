import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EachArticle } from '../article-list/each-article';
import { getIdFromToken } from '../../data/decode-token';
import { AddArticle } from './style';

class EditArticle extends React.Component {
	state = { articles: [], loading: true };

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
			.then(() => this.setState({ loading: false }))
			.catch(error => console.error('Error:', error));
	};

	deleteArticle = id => {
		this.setState({ loading: true });
		const token = localStorage.getItem('token');
		fetch(`https://api.farmapalatia.gr/article/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(() => this.fetchArticles())
			.catch(error => console.error('Error:', error));
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		if (userId !== 1 && userId !== 2) {
			this.props.history.replace('/');
		}
		return this.fetchArticles();
	}

	render() {
		if (this.state.loading) {
			return (
				<React.Fragment>
					<div className="d-flex justify-content-center mt-4">
						<Loader
							type="Oval"
							color="#27ae60"
							height={80}
							width={80}
						/>
					</div>
					<p className="text-center">Παρακαλώ περιμένετε</p>
				</React.Fragment>
			);
		}
		return (
			<div className="container">
				<AddArticle to="/addarticle" className="btn btn-success my-3">
					добавить новую статью
				</AddArticle>
				<div className="d-block row">
					{this.state.articles.length > 0 &&
						this.state.articles.map((article, index) => (
							<div className="row" key={index}>
								<div
									className="col-md-10 col-sm-12"
									onClick={() =>
										this.props.history.push(
											`article/${article.id}`,
										)
									}
									onKeyDown={() =>
										this.props.history.push(
											`article/${article.id}`,
										)
									}
								>
									<EachArticle
										id={article.id}
										name={article.name}
										text={article.text}
										image={article.image}
									/>
								</div>
								<div className="col-md-2 col-sm-12 align-self-center">
									<Link
										to={`/updatearticle/${article.id}`}
										className="btn text-info d-block py-3"
									>
										редактировать
									</Link>
									<div
										onClick={() =>
											this.deleteArticle(article.id)
										}
										onKeyDown={() =>
											this.deleteArticle(article.id)
										}
										className="btn d-block btn-danger"
									>
										удалить
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

EditArticle.propTypes = {
	history: PropTypes.object,
};

export default EditArticle;
