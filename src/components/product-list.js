import React from 'react';
import styled from 'styled-components';
import { MainProductList } from '../../main-product-list';
import fp from './images/fp.png';

const ProductCard = styled.div`
	border-radius: 5px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0);
	transition: box-shadow 0.3s ease;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0px 30px 0 rgba(0, 0, 0, 0.1);
	}
`;

const H5 = styled.h5`
	color: #707070;
`;

const P = styled.p`
	color: #707070;
`;

const ProductList = MainProductList.map((product, index) => (
	<div key={index} className="col-4 text-justify p-3">
		<ProductCard className="card border-0" i={index}>
			<img
				className="card-img-top w-25 mt-4 ml-4"
				src={fp}
				alt={product.name}
			/>
			<div className="card-body">
				<H5 className="card-title">{product.name}</H5>
				<P className="card-text">{product.info}</P>
			</div>
		</ProductCard>
	</div>
));

/*
	One cool thing you can pass is a bool prop. Check this out:
	<ProductBorder className="card" i={i = ProductList.length - 1}>
	This will set props.i to TRUE when the condition is true, else {
	it'll be false. In this specific case, no need to use it, but it would
	eliminate the need for a function
	}
*/

export { ProductList };
