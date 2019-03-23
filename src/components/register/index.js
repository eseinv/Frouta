import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { H3, LogButton, Input, LogError } from '../login/style';

class Register extends React.Component {
	state = {
		loading: false,
		usernameField: '',
		emailField: '',
		passwordField: '',
		error: '',
	};

	handleFormSubmit = (event, userEntered, emailEntered, passEntered) => {
		event.preventDefault();
		this.setState({ loading: true });
		const logInfo = {
			name: userEntered,
			email: emailEntered,
			password: passEntered,
			type: 'customer',
			country: '',
			street: '',
			postal: '',
			phone: '',
		};
		fetch('http://homestead.test/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(logInfo),
		})
			.then(result => result.json())
			.then(response => this.handleResponse(response))
			.catch(error => this.setState({ error, loading: false }));
	};

	handleResponse = response => {
		this.setState({ loading: false });
		if (response.Success) {
			this.props.history.push('/login');
		}
	};

	handleInputChange = (value, fieldType) => {
		const target = `${fieldType}Field`;
		this.setState({
			[target]: value,
		});
	};

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
				<div className="row">
					<div className="col-12 mt-5 mb-3 text-center">
						<H3>Δημιουργία λογαριασμού</H3>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<form
							onSubmit={e =>
								this.handleFormSubmit(
									e,
									this.state.usernameField,
									this.state.emailField,
									this.state.passwordField,
								)
							}
						>
							<div className="form-group">
								<label className="d-block" htmlFor="username">
									Όνομα χρήστη
								</label>
								<Input
									required
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
								<label className="d-block" htmlFor="email">
									Email
								</label>
								<Input
									onChange={event =>
										this.handleInputChange(
											event.target.value,
											'email',
										)
									}
									value={this.state.emailField}
									type="email"
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
							{!!this.state.error && (
								<LogError className="text-center">
									Έγινε κάποιο σφάλμα. Έχετε ήδη λογαριασμό;
								</LogError>
							)}
							<LogButton className="btn-block mt-4 py-2">
								Δημιουργία
							</LogButton>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	history: PropTypes.object,
};

export default Register;
