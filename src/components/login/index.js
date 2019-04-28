import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { H3, Input, LogError, LogButton, RegButton } from './style';

class Login extends React.Component {
	state = {
		usernameField: '',
		passwordField: '',
		response: { type: '', message: '' },
		loading: false,
	};

	handleInputChange = (value, fieldType) => {
		const target = `${fieldType}Field`;
		this.setState({
			[target]: value,
		});
	};

	handleFormSubmit = (event, userEntered, passEntered) => {
		event.preventDefault();
		this.setState({ loading: true });
		const logInfo = {
			email: userEntered,
			password: passEntered,
		};
		fetch('https://api.farmapalatia.gr/login', {
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

	handleResponse = response => {
		this.setState({ loading: false });
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
	};

	goRegister = () => {
		this.props.history.push('/register');
	};

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
									Email
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
									Κωδικός
								</label>
								<Input
									required
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
							{this.state.loading && (
								<React.Fragment>
									<div className="d-flex justify-content-center mt-4">
										<Loader
											type="Oval"
											color="#27ae60"
											height={40}
											width={40}
										/>
									</div>
									<p className="text-center">
										Έλεγχος στοιχείων
									</p>
								</React.Fragment>
							)}
							{this.state.response.error && (
								<LogError className="text-center">
									{this.state.response.message}
								</LogError>
							)}
							<LogButton className="btn-block mt-4 py-2">
								Είσοδος
							</LogButton>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-12 p-3 d-flex align-items-center justify-content-center">
						Δεν έχετε λογαριασμό;
						<RegButton
							className="btn text-primary"
							onClick={this.goRegister}
						>
							Πατήστε εδώ
						</RegButton>
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
