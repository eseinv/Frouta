import styled from 'styled-components';
import { Input } from '../styled/input';

export { Input };

export const DeadInput = styled(Input)`
	width: 120px;
	border-color: transparent;
	background: none;
	font-size: 28px;
	font-weight: bold;
	color: #1b1b1b;
	text-align: left;
	pointer-events: none;
	&:hover {
		cursor: default;
	}
`;

export const ProdName = styled.h4`
	color: #707070;
	cursor: default;
`;

export const ProdText = styled.p`
	color: #707070;
	cursor: default;
`;

export const Label = styled.label`
color: '#707070',
textDecoration: 'underline',
`;
