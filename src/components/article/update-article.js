import React from 'react';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { ArticleTitle, H1 } from './style';
import { getIdFromToken } from '../../data/decode-token';

class UpdateArticle extends React.Component {
	state = {
		id: '',
		title: '',
		text: '',
		warning: '',
		picture: {},
	};

	onDrop = img => {
		const [image] = img;
		//  fd.append('file', image, image.name);
		const fd = {
			image: image.name,
		};
		fetch(`https://api.farmapalatia.gr/article/${this.state.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(fd),
		})
			.then(result => result.json())
			.then(() => window.location.reload());
	};

	doUpload = () => {
		const newItemToAdd = {
			name: this.state.title,
			text: this.state.text,
		};
		fetch(`https://api.farmapalatia.gr/article/${this.state.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(newItemToAdd),
		})
			.then(result => result.json())
			.then(() => this.props.history.push('/editarticle'))
			.catch(error => console.error('Error:', error));
	};

	deleteImage = () => {
		const newItemToAdd = {
			image: '',
		};
		fetch(`https://api.farmapalatia.gr/article/${this.state.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(newItemToAdd),
		})
			.then(result => result.json())
			.catch(error => console.error('Error:', error));
	};

	fetchArticle = id => {
		this.setState({ id });
		const token = localStorage.getItem('token');
		fetch(`https://api.farmapalatia.gr/article/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(article =>
				this.setState({
					title: article.name,
					text: article.text,
					picture: article.image,
				}),
			)
			.catch(error => console.error('Error:', error));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title.length === 0 || this.state.text.length === 0)
			return this.setState({ warning: 'не все поля заполнены' });
		return this.doUpload(this.state.picture);
	};

	handleTitleChange = title => {
		this.setState({ title });
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		if (userId !== 1 && userId !== 2) {
			this.props.history.replace('/');
		}
		const url = window.location.href;
		const baseUrl = `${window.location.protocol}//${window.location.host}`;
		const articleId = url.substring(
			baseUrl.length + '/updatearticle/'.length,
		);
		return this.fetchArticle(articleId);
	}

	render() {
		console.log(this.state.picture);
		return (
			<div className="container">
				<form onSubmit={this.handleFormSubmit}>
					<ArticleTitle
						onChange={e => this.handleTitleChange(e.target.value)}
						placeholder="название статьи"
						value={this.state.title}
					/>
					<H1 className="my-2">{this.state.title}</H1>
					<Editor
						apiKey="6z9n9h4qgiau7kf979ssmnz1j8fbzbfp7ye2f8dgq73plql3"
						init={{
							height: 400,
							plugins: [
								'advlist autolink lists link image charmap print preview anchor',
								'searchreplace visualblocks code fullscreen',
								'insertdatetime media table paste code help wordcount',
							],
						}}
						initialValue={this.state.text}
						onEditorChange={text => this.setState({ text })}
					/>
					<ImageUploader
						withPreview
						withIcon
						singleImage
						buttonText="Choose image"
						onChange={e => this.onDrop(e)}
						imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
						maxFileSize={5242880}
					/>
					<img
						className="img-responsive img-thumbnail"
						style={{ maxHeight: 150 }}
						src={`https://api.farmapalatia.gr/images/articles/${
							this.state.picture
						}`}
						alt="img"
					/>
					<div
						onClick={this.deleteImage}
						onKeyDown={this.deleteImage}
						className="btn d-inline-block bg-danger"
					>
						X
					</div>
					<p className="text-danger">{this.state.warning}</p>
					<button className="btn btn-success d-block">Submit</button>
				</form>
			</div>
		);
	}
}

UpdateArticle.propTypes = {
	history: PropTypes.object,
};

export default UpdateArticle;
