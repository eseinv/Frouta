import styled from 'styled-components';

export const H3 = styled.h3`
	color: #62534b;
	text-align: left;
	&:hover {
		cursor: default;
	}
`;

export const H5 = styled.h5`
	color: #62534b;
	margin-top: 1.7em;
	&:hover {
		cursor: default;
	}
`;

export const P = styled.p`
	color: #373535;
	&:hover {
		cursor: default;
	}
`;

export const TextWrapper = styled.div`
	letter-spacing: 0.5px;
	line-height: 1.4em;
	@media only screen and (max-width: 575px) {
		padding: 2em;
		line-height: 1.5em;
	}
`;
