import styled from 'styled-components';

export const FormButton = styled.button`
	background-color: #fff;
	border: 1px solid #587c34;
	margin-top: 10px;
	width: ${props => props.width}px;
	padding: 5px 6px 5px 6px;
	color: #587c34;
	&:focus {
		outline: none;
	}
	&:hover {
		box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);
		cursor: pointer;
	}
	&:active {
		cursor: pointer;
		color: #fff;
		background-color: #587c34;
	}
`;
