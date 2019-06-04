import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getIdFromToken } from '../../data/decode-token';
import { H3, Input, LogButton } from '../login/style';

class Menu extends React.Component {
	state = { loading: true, updated: false };

	fetchData = () => {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		return fetch(`https://api.farmapalatia.gr/user/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(result => result.json())
			.then(user =>
				this.setState({
					user,
					loading: false,
				}),
			)
			.catch(error => console.error('Error:', error));
	};

	saveData = () => {
		const token = localStorage.getItem('token');
		const userId = getIdFromToken(token);
		const logInfo = {
			name: this.state.user.name,
			email: this.state.user.email,
			country: this.state.user.country,
			street: this.state.user.street,
			postal: this.state.user.postal,
			phone: this.state.user.phone,
		};
		fetch(`https://api.farmapalatia.gr/user/${userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(logInfo),
		})
			.then(result => result.json())
			.then(response => console.log(response))
			.catch(error => console.error(error))
			.then(this.setState({ loading: false, updated: true }));
	};

	editFields = () => {
		this.setState({ editing: !this.state.editing });
	};

	handleChange = (e, field) => {
		const user = { ...this.state.user };
		if (field === 'name') user.name = e;
		if (field === 'email') user.email = e;
		if (field === 'phone') user.phone = e;
		if (field === 'country') user.country = e;
		if (field === 'street') user.street = e;
		if (field === 'postal') user.postal = e;
		this.setState({ user });
	};

	componentDidMount() {
		const token = localStorage.getItem('token');
		if (token === null) {
			return this.props.history.replace('/');
		}
		return this.fetchData();
	}

	render() {
		if (this.state.loading) {
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
					<p className="text-center">Παρακαλώ περιμένετε</p>
				</React.Fragment>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 mt-5 mb-3 text-center">
						{this.state.user.type === 'admin' ? (
							<Link to="/orders">
								<H3>ΠΑΡΑΓΓΕΛΙΕΣ</H3>
							</Link>
						) : (
							<H3>Μενού</H3>
						)}
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="form-group">
							<label className="d-block" htmlFor="name">
								Ονοματεπώνυμο
							</label>
							<Input
								onChange={event =>
									this.handleChange(
										event.target.value,
										'name',
									)
								}
								value={this.state.user.name}
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="d-block" htmlFor="email">
								Email
							</label>
							<Input
								required
								onChange={event =>
									this.handleChange(
										event.target.value,
										'email',
									)
								}
								value={this.state.user.email}
								type="text"
								className="form-control"
							/>
						</div>
						<div className="form-group">
							<label className="d-block" htmlFor="phone">
								Τηλέφωνο
							</label>
							<Input
								onChange={event =>
									this.handleChange(
										event.target.value,
										'phone',
									)
								}
								value={this.state.user.phone}
								type="text"
								className="form-control"
							/>
						</div>

						<div className="form-group">
							<label className="d-block" htmlFor="country">
								Χώρα
							</label>
							<Input
								onChange={event =>
									this.handleChange(
										event.target.value,
										'country',
									)
								}
								value={this.state.user.country}
								type="text"
								className="form-control"
							/>
							<div className="form-group">
								<label className="d-block" htmlFor="street">
									Διεύθυνση
								</label>
								<Input
									onChange={event =>
										this.handleChange(
											event.target.value,
											'street',
										)
									}
									value={this.state.user.street}
									type="text"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label className="d-block" htmlFor="postal">
									Τ.Κ.
								</label>
								<Input
									onChange={event =>
										this.handleChange(
											event.target.value,
											'postal',
										)
									}
									value={this.state.user.postal}
									type="text"
									className="form-control"
								/>
							</div>
						</div>
						{this.state.updated && (
							<span className="text-success">
								Τα στοιχεία αποθηκεύτηκαν
							</span>
						)}
						<LogButton
							onClick={this.saveData}
							className="btn-block mt-4 py-2"
						>
							Αποθήκευση
						</LogButton>
					</div>
				</div>
			</div>
		);
	}
}

Menu.propTypes = {
	history: PropTypes.object,
};
export default Menu;
