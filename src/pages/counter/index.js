import React, { Component } from 'react';
import { Score } from './score';
import { ChangeScore } from './change-score';
import { ManualScore } from './manual-score';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		const count = localStorage.getItem('count');
		if (count) {
			this.loadCount(count);
		}
	}

	loadCount = count => {
		this.setState({ count: parseInt(count, 10) });
	};

	changeCount = amnt => {
		this.setState({ count: this.state.count + amnt }, () =>
			localStorage.setItem('count', this.state.count),
		);
	};

	resetCount = () => {
		this.setState({ count: 0 }, () =>
			localStorage.setItem('count', this.state.count),
		);
	};

	manualCount = amnt => {
		this.setState({ count: parseInt(amnt, 10) }, () =>
			localStorage.setItem('count', this.state.count),
		);
	};

	render() {
		//	eslint-disable-next-line
		return (
			<div className="counter card p-3 container">
				<h1 className="display-5 text-capitalize"> counter </h1>
				<p>
					Use the buttons to count up or down. Click the text to reset
					count to 0. Use the input to preset a value.
				</p>
				<div className="card-body">
					<Score score={this.state.count} reset={this.resetCount} />
					<div className="row justify-content-around">
						<div className="col-6 text-center">
							<ChangeScore
								action="less"
								countFunc={this.changeCount}
							>
								Decrease
							</ChangeScore>
							<ChangeScore
								action="more"
								countFunc={this.changeCount}
							>
								Increase
							</ChangeScore>
						</div>
					</div>
					<ManualScore
						manualApply={this.manualCount}
						realCount={this.state.count}
					/>
				</div>
			</div>
		);
	}
}

export { Counter };
