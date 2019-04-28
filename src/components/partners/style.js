import styled from 'styled-components';

export const PartnerCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0);
	transition: box-shadow 0.5s ease;
	cursor: default;
	&:hover {
		box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.1);
	}
`;

export const H5 = styled.h5`
	color: #707070;
	display: inline-block;
	font-weight: bold;
`;

export const P = styled.p`
	color: #707070;
	font-style: italic;
`;

export const ShopType = styled(P)`
	display: inline-block;
	margin-left: 1rem;
`;
