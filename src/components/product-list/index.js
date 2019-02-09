import React from 'react';
import PropTypes from 'prop-types';
import { MainProductList } from '../../data/main-product-list';
import fp from '../../images/fp.png';
import { ProductCard, H5, P } from './style';

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
