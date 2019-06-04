import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { EachProduct } from './each-product';

class ProductList extends React.Component {
	state = { products: [], loading: true };
	componentDidMount() {
		fetch('https://api.farmapalatia.gr/product', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(result => result.json())
			.then(items => this.saveProducts(items))
			.catch(error => console.error('Error:', error))
			.then(() => this.setLoading(false));
	}

	saveProducts = items => {
		this.setState({ products: items });
	};

	setLoading = load => {
		this.setState({ loading: load });
	};

	render() {
		return (
			<div className="container">
				{this.state.loading ? (
					<div>
						<div className="d-flex justify-content-center">
							<Loader
								type="Oval"
								color="#27ae60"
								height={80}
								width={80}
							/>
						</div>
						<p className="text-center">Τα προϊόντα φορτώνουν</p>
					</div>
				) : null}

				<div className="row">
					{this.state.products.map((product, index) => (
						<div
							role="presentation"
							key={index}
							className="col-sm-6 col-md-6 col-lg-4 text-justify p-3"
							onClick={() =>
								this.props.history.push(`product/${product.id}`)
							}
						>
							<EachProduct product={product} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

ProductList.propTypes = {
	history: PropTypes.object,
};

export { ProductList };
