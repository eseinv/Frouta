import styled from 'styled-components';

export const H3 = styled.h3`
	color: #707070;
	&:hover {
		cursor: default;
	}
`;

export const Input = styled.input`
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

export const LogError = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 6px;
	font-style: italic;
`;

export const LogButton = styled.button`
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
