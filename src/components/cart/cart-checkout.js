import React from 'react';
import Loader from 'react-loader-spinner';
import { getIdFromToken } from '../../data/decode-token';
import { FormButton } from '../styled/form-button';

class CartCheckout extends React.Component {
	state = { finalCartPrice: 0, loading: true, fetchedCartInfo: [] };

	fetchData = () => {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		return fetch(`http://homestead.test/cart/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(fetchedCartInfo =>
				this.setState({
					fetchedCartInfo,
					loading: false,
				}),
			)
			.then(() => this.calculateTotal())
			.catch(error => console.error('Error:', error));
	};

	componentDidMount() {
		this.fetchData();
	}

	calculateTotal = () => {
		const priceArray = [];
		this.state.fetchedCartInfo.map((cartItem, index) =>
			priceArray.push(
				this.state.fetchedCartInfo[index].unitPrice *
					this.state.fetchedCartInfo[index].quantity,
			),
		);
		const prices = priceArray.reduce((sum, price) => sum + price, 0);
		if (prices !== this.state.finalCartPrice) {
			this.setState({ finalCartPrice: prices });
		}
	};

	render() {
		if (!this.state.loading) {
			return (
				<div className="sticky-top text-center h3 p-3 mt-2 card">
					<div className="row">
						<div className="col-12 font-weight-light">
							Σύνολο προς πληρωμή:
						</div>
					</div>
					<div className="row mt-2">
						<div className="col-12">
							<span className="mt-2 h1 font-weight-bold">
								{this.state.finalCartPrice} &euro;
							</span>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<FormButton width={200} className="text-center h4">
								Επιβεβαίωση
							</FormButton>
						</div>
					</div>
				</div>
			);
		}
		return (
			<React.Fragment>
				<div className="d-flex justify-content-center mt-4">
					<Loader
						type="Oval"
						color="#27ae60"
						height={80}
						width={80}
					/>
				</div>
				<p className="text-center">Υπολογισμός κόστους</p>
			</React.Fragment>
		);
	}
}

CartCheckout.propTypes = {};
export default CartCheckout;
