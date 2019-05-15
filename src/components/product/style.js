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
	color: #62534b;
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

export const PreviewButton = styled.button`
	background: none;
	border: none;
	display: inline-block;
	max-width: 80px;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

export const Preview = styled.img`
	${props => (props.active ? 'border: 2px solid #587c34' : '')}
	align-self: center
	margin-right: 2px;
	padding: 2px;
`;

export const PreviewWrap = styled.div`
	padding: 5px 0;
	background-color: #eee;
`;
