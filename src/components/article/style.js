import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H1 = styled.h1`
	color: #62534b;
	display: inline-block;
	font-weight: bold;
`;

export const H5 = styled.h5`
	color: #62534b;
	display: inline-block;
	font-weight: bold;
`;

export const P = styled.p`
	color: #62534b;
	text-align: justify;
	display: inline-block;
`;

export const SuggestedCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0);
	transition: box-shadow 0.5s ease;
	cursor: default;
	&:hover {
		box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
`;

export const Div = styled.div`
	h1 {
		color: red;
	}
`;

export const AddArticle = styled(Link)``;

export const ArticleTitle = styled.input`
	padding-left: 0.5em;
	outline: none;
	display: block;
`;
