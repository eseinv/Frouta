import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard, H5, P } from './style';
const maxInfoChars = 116;

const EachProduct = props => (
	<ProductCard className="card border-0">
		<img
			className="card-img-top w-25 mt-4 ml-4"
			src={props.productPicture}
			alt={props.productName}
		/>
		<div className="card-body">
			<H5 className="card-title">{props.productName}</H5>
			<P className="card-text">
				{props.productInfo.length > maxInfoChars
					? `${props.productInfo.substring(0, maxInfoChars - 3)}...`
					: props.productInfo}
			</P>
		</div>
	</ProductCard>
);

EachProduct.propTypes = {
	productPicture: PropTypes.string,
	productName: PropTypes.string,
	productInfo: PropTypes.string,
};

export { EachProduct };
