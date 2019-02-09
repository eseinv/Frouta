import React from 'react';
import PropTypes from 'prop-types';
import { MainProductList } from '../../data/main-product-list';
import { EachProduct } from './each-product';
import fp from '../../images/fp.png';

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
					<EachProduct
						productPicture={fp}
						productName={product.name}
						productInfo={product.info}
					/>
				</div>
			))}
		</div>
	</div>
);

ProductList.propTypes = {
	history: PropTypes.object,
};

export { ProductList };
