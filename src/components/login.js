import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Users } from '../user-list';

const H3 = styled.h3`
	color: #707070;
	&:hover {
		cursor: default;
	}
`;

const Input = styled.input`
	border-bottom: 3px solid #587c34;
	background: #fff;
	color: #707070;
	&:focus {
		box-shadow: none;
		border-top-color: transparent;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: #587c34;
	}
	&::selection {
		background: #587c34;
		color: #fff;
	}
`;

const LogError = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 6px;
	font-style: italic;
`;

const LogButton = styled.button`
	border: 1px solid #587c34;
	background-image: linear-gradient(
		rgba(255, 255, 255, 1),
		rgba(255, 255, 255, 1)
	);
	color: #587c34;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&:hover {
		background-image: linear-gradient(
				rgba(0, 0, 0, 0.05),
				rgba(0, 0, 0, 0.05)
			),
			linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
	}
`;

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
				<div className="row justify-content-around">
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
									Incorrect credentials
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
