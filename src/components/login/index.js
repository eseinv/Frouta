import React from 'react';
import PropTypes from 'prop-types';
import { H3, Input, LogError, LogButton } from './style';

class Login extends React.Component {
	state = {
		usernameField: '',
		passwordField: '',
		response: { type: '', message: '' },
	};

	handleInputChange = (value, fieldType) => {
		const target = `${fieldType}Field`;
		this.setState({
			[target]: value,
		});
	};

	handleFormSubmit = (event, userEntered, passEntered) => {
		event.preventDefault();
		const logInfo = {
			email: userEntered,
			password: passEntered,
		};
		fetch('http://homestead.test/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(logInfo),
		})
			.then(result => result.json())
			.then(response => this.handleResponse(response))
			.catch(error => console.error('Error:', error));
	};

	handleResponse(response) {
		if (response.token) {
			localStorage.setItem('token', response.token);
			this.props.changeLogState(true);
			this.props.history.push('/');
		}
		if (response.email) {
			this.setState({
				response: {
					error: true,
					message: 'Εισάγετε ένα πραγματικό email',
				},
			});
		}
		if (response.error) {
			this.setState({
				response: {
					error: true,
					message: 'Λάθος email ή κωδικός',
				},
			});
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-5 mb-3 text-center">
						<H3>Είσοδος</H3>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<form
							onSubmit={e =>
								this.handleFormSubmit(
									e,
									this.state.usernameField,
									this.state.passwordField,
								)
							}
						>
							<div className="form-group">
								<label className="d-block" htmlFor="username">
									Username
								</label>
								<Input
									onChange={event =>
										this.handleInputChange(
											event.target.value,
											'username',
										)
									}
									value={this.state.usernameField}
									type="text"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label className="d-block" htmlFor="password">
									Password
								</label>
								<Input
									onChange={event =>
										this.handleInputChange(
											event.target.value,
											'password',
										)
									}
									value={this.state.passwordField}
									type="password"
									className="form-control"
								/>
							</div>
							{this.state.response.error && (
								<LogError className="text-center">
									{this.state.response.message}
								</LogError>
							)}
							<LogButton className="btn-block mt-4 py-2">
								Log in
							</LogButton>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	history: PropTypes.object,
	changeLogState: PropTypes.func,
};

export default Login;
