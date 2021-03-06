import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard, H5, P } from './style';
const maxInfoChars = 112;

const EachProduct = props => {
	const { product } = props;
	return (
		<ProductCard className="card border-0">
			<img
				className="card-img-top w-75 mt-4 ml-5"
				src={`https://api.farmapalatia.gr/images/products/${
					product.image
				}`}
				alt={product.name}
			/>
			<div className="card-body">
				<H5 className="card-title text-justify-left">{product.name}</H5>
				<P className="card-text">
					<P className="card-text mb-2">
						<strong> Τιμή: {product.unitPrice}&euro; </strong>
					</P>
					{product.info.length > maxInfoChars
						? `${product.info.substring(0, maxInfoChars - 3)}...`
						: product.info}
				</P>
			</div>
		</ProductCard>
	);
};

EachProduct.propTypes = {
	product: PropTypes.object,
};

export { EachProduct };
