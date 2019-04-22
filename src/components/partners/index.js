import React from 'react';
import ImagesLoaded from 'react-images-loaded';
import Loader from 'react-loader-spinner';
import { H3 } from '../contact/style';

class Partners extends React.Component {
	state = { loading: true };
	isLoaded = () => {
		this.setState({ loading: false });
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
				<ImagesLoaded done={this.isLoaded}>
					<div className="row mt-4">
						<div className="col-12 col-md-4">
							<img
								src="https://api.farmapalatia.gr/images/partners/partner.jpg"
								alt="Partner"
								className="img-fluid"
							/>
						</div>
						<div className="col-12 col-md-4">
							<img
								src="https://api.farmapalatia.gr/images/partners/partner.jpg"
								alt="Partner"
								className="img-fluid"
							/>
						</div>
						<div className="col-12 col-md-4">
							<img
								src="https://api.farmapalatia.gr/images/partners/partner.jpg"
								alt="Partner"
								className="img-fluid"
							/>
						</div>
					</div>
					<hr />

					<div className="row mt-3">
						<div className="col-12 col-md-4">
							<img
								src="https://api.farmapalatia.gr/images/partners/partner.jpg"
								alt="Partner"
								className="img-fluid"
							/>
						</div>
						<div className="col-12 col-md-4">
							<img
								src="https://api.farmapalatia.gr/images/partners/partner.jpg"
								alt="Partner"
								className="img-fluid"
							/>
						</div>
						<div className="col-12 col-md-4">
							<img
								src="https://api.farmapalatia.gr/images/partners/partner.jpg"
								alt="Partner"
								className="img-fluid"
							/>
						</div>
					</div>
				</ImagesLoaded>
			</div>
		);
	}
}

export default Partners;
