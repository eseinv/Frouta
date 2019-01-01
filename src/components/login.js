import React from 'react';
import styled from 'styled-components';
import { Users } from '../user-list';

const H3 = styled.h3`
	color: #707070;
	&:hover {
		cursor: default;
	}
`;

const Input = styled.input`
	border: 3px solid #587c34;
	border-top-width: 0;
	border-left-width: 0;
	border-right-width: 0;
	background: #f6f8f8;
	color: #707070;
	&:focus {
		outline: none;
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

	handleSubmit = (event, userEntered, passEntered) => {
		event.preventDefault();

		const checkUser = Users.filter(
			user =>
				user.username === userEntered && user.password === passEntered,
		);
		const [userFound] = checkUser;

		if (userFound) {
			return this.setState({ logError: false });
		}
		return this.setState({ logError: true });
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
					<div className="col-4">
						<form
							onSubmit={e =>
								this.handleSubmit(
									e,
									this.state.usernameField,
									this.state.passwordField,
								)
							}
						>
							<div className="form-group">
								<label className="d-block" htmlFor="username">
									User
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
									placeholder="Username"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label className="d-block" htmlFor="password">
									Pass
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
									placeholder="Password"
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

export default Login;
