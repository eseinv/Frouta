import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MainProductList } from '../main-product-list';
import fp from '../images/fp.png';

const ProductCard = styled.div`
	border-radius: 5px;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0);
	transition: box-shadow 0.5s ease;
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

const maxInfoChars = 116;

const ProductList = props => (
	<div className="container">
		<div className="row">
			{MainProductList.map((product, index) => (
				<div
					role="presentation"
					key={index}
					className="col-md-4 col-sm-6 text-justify p-3"
					onClick={() => props.history.push(`product/${product.id}`)}
				>
					<ProductCard className="card border-0" i={index}>
						<img
							className="card-img-top w-25 mt-4 ml-4"
							src={fp}
							alt={product.name}
						/>
						<div className="card-body">
							<H5 className="card-title">{product.name}</H5>
							<P className="card-text">
								{product.info.length > maxInfoChars
									? `${product.info.substring(
											0,
											maxInfoChars - 3,
									  )}...`
									: product.info}
							</P>
						</div>
					</ProductCard>
				</div>
			))}
		</div>
	</div>
);

ProductList.propTypes = {
	history: PropTypes.object,
};

export { ProductList };
