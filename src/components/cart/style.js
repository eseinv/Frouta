import styled from 'styled-components';
import { Input } from '../styled/input';

export const DisabledInput = styled(Input)`
	&:hover {
		cursor: context-menu;
	}
`;
export const TextDiv = styled.div`
	pointer-events: none;
`;

export const P = styled.p`
	pointer-events: none;
`;

export const H5 = styled.h5`
	pointer-events: none;
`;

export const Del = styled.button`
	font-size: 1.2rem;
	&:hover {
		cursor: pointer;
		background-color: #dc3545;
		opacity: 1;
	}
`;

export const Button = styled.button`
	border: 1px solid #373535;
	border-radius: 3px;
	background-color: #F6F8F8
	font-weight: bold
	width: 40px
	height: 27px;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const PMB = styled(P)`
	margin-bottom: 0.5rem;
`;
