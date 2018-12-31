import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Users from '../user-list';

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
	width: 130px;
	text-align: center;
	background: #F6F8F8
	color: #707070
	&:focus {
		outline: none;
	}
	&::selection {
		background: #587c34;
		color: #fff;
	}
`;

const LogButton = styled.button`
	border: 1px solid #587c34;
	width: 130px;
	background: #fff;
	color: #587c34;
	&:focus {
		outline: none;
	}
`;

const handleSubmit = event => {
	event.preventDefault();
};

const Login = () => (
	<div className="container">
		<div className="row">
			<div className="col-12 mt-5 mb-3 text-center">
				<H3>Login</H3>
			</div>
		</div>
		<div className="row">
			<form className="col-12" onSubmit={e => handleSubmit(e)}>
				<div className="text-center">
					<label className="d-block" htmlFor="username" />
					<Input type="text" placeholder="Username" />
				</div>
				<div className="text-center mt-3">
					<label className="d-block" htmlFor="password" />
					<Input type="password" placeholder="Password" />
				</div>
				<div className="col-12 text-center mt-4">
					<LogButton>Login</LogButton>
				</div>
			</form>
		</div>
	</div>
);

export { Login };
