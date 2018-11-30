import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ManualScore extends Component {
	constructor(props) {
		super(props);

		this.state = { inputTerm: '' };
	}

	handleChange = inputTerm => {
		this.setState({ inputTerm: inputTerm.replace(/\D/, '') });
	};

	applyCount = () => {
		let amnt = this.state.inputTerm;
		if (amnt === '') {
			amnt = this.props.realCount;
		}
		this.props.manualApply(amnt);
	};

	render() {
		return (
			<div className="text-center mx-auto mt-2 countstyle">
				<div className="input-group mb-3">
					<input
						className="form-control"
						type="text"
						placeholder="Enter value to preset..."
						value={this.state.inputTerm}
						onChange={event =>
							this.handleChange(event.target.value)
						}
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-info"
							type="button"
							onClick={this.applyCount}
						>
							Apply
						</button>
					</div>
				</div>
			</div>
		);
	}
}

ManualScore.propTypes = {
	manualApply: PropTypes.func,
	realCount: PropTypes.number,
};

export { ManualScore };
