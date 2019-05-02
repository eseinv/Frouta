import React from 'react';
import Loader from 'react-loader-spinner';
import { EachPartner } from './each-partner';
import { H3 } from '../contact/style';

class Partners extends React.Component {
	state = { loading: true, partners: [] };
	isLoaded = () => {
		this.setState({ loading: false });
	};
	componentDidMount() {
		fetch('https://api.farmapalatia.gr/partner', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(result => result.json())
			.then(items => this.savePartners(items))
			.catch(error => console.error('Error:', error))
			.then(() => this.setLoading(false));
	}

	savePartners = partners => {
		this.setState({ partners });
	};

	setLoading = load => {
		this.setState({ loading: load });
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-5 mb-3 text-center">
						<H3>Οι Συνεργάτες Μας</H3>
					</div>
				</div>
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
						<p className="text-center">Παρακαλώ περιμένετε</p>
					</div>
				) : null}

				<div className="row">
					{this.state.partners.map((partner, index) => (
						<div
							role="presentation"
							key={index}
							className="col-md-6 col-sm-12 text-justify p-3"
						>
							<EachPartner partner={partner} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Partners;
