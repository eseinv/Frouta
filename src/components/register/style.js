import styled from 'styled-components';

export const RegButton = styled.button`
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
