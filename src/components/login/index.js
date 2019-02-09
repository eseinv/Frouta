import React from 'react';
import PropTypes from 'prop-types';
import { Users } from '../../data/user-list';
import { H3, Input, LogError, LogButton } from './style';

class Login extends React.Component {
	state = { usernameField: '', passwordField: '', logError: false };

	handleInputChange = (value, fieldType) => {
		const target = `${fieldType}Field`;
		this.setState({
			[target]: value,
		});
	};

	handleFormSubmit = (event, userEntered, passEntered) => {
		event.preventDefault();

		const checkUser = Users.filter(
			user =>
				user.username === userEntered && user.password === passEntered,
		);
		const [userFound] = checkUser;

		if (userFound) {
			this.setState({ logError: false }, () =>
				this.props.history.push(`/`),
			);
			this.props.changeLogState(true);
		} else this.setState({ logError: true });
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-5 mb-3 text-center">
						<H3>Login</H3>
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
							{this.state.logError === true && (
								<LogError className="text-center">
									Λανθασμένα στοιχεία εισόδου
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
	changeLogState: PropTypes.func,
	history: PropTypes.object,
};

export default Login;
