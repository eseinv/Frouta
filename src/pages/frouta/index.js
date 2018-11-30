import React from 'react';
import { NavBar } from './nav-bar';
import { ProductList } from './product-list';
import { Footer } from './footer';

class Frouta extends React.Component {
	constructor() {
		super();
		this.state = { logState: true };
	}
	toggleLog = () => {
		this.setState({ logState: !this.state.logState });
	};
	render() {
		return (
			<div>
				<NavBar
					logState={this.state.logState}
					toggleLog={this.toggleLog}
				/>
				<div className="container">
					<div className="row mt-5">{ProductList}</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export { Frouta };
