import React from 'react';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';
import { ArticleTitle, H1 } from './style';
import { getIdFromToken } from '../../data/decode-token';

class AddArticle extends React.Component {
	state = {
		title: '',
		text: '',
		warning: '',
		picture: {},
		pictureAdded: false,
	};

	onDrop = picture => {
		this.setState({ picture: picture[0], pictureAdded: true });
	};

	doUpload = image => {
		const fd = new FormData();
		fd.append('file', image, image.name);
		fd.append('name', this.state.title);
		fd.append('text', this.state.text);
		fd.append('image', image.name);
		return fetch(`https://api.farmapalatia.gr/article/create`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: fd,
		}).then(() => this.props.history.push('/editarticle'));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title.length === 0 || this.state.text.length === 0)
			return this.setState({ warning: 'не все поля заполнены' });
		if (!this.state.pictureAdded)
			return this.setState({ warning: 'изображение не добавлено' });
		return this.doUpload(this.state.picture);
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		if (userId !== 1 && userId !== 2) {
			this.props.history.replace('/');
		}
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleFormSubmit}>
					<ArticleTitle
						onChange={e => this.setState({ title: e.target.value })}
						placeholder="название статьи"
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
						initialValue=""
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
					<p className="text-danger">{this.state.warning}</p>
					<button className="btn btn-success d-block">Submit</button>
				</form>
			</div>
		);
	}
}

AddArticle.propTypes = {
	history: PropTypes.object,
};

export default AddArticle;
