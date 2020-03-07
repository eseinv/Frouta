import styled from 'styled-components';

export const InfoButton = styled.button`
	background-color: #fff;
	border: 1px solid #707070;
	border-radius: 3px;
	margin-top: 10px;
	margin-bottom: 10px;
	width: ${props => props.width}px;
	padding: 5px 6px 5px 6px;
	color: #707070;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
	&:active {
		cursor: pointer;
		color: #fff;
		background-color: #707070;
	}
`;
