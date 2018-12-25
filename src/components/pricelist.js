import React from 'react';
import styled from 'styled-components';
import fp from '../images/fp.png';

const ButtonPacked = styled.button`
	border: 1px solid #707070;
	border-radius: 5px 0px 0px 5px;
	border-right: none;
	color: ${props => (props.packState ? '#fff' : '#587c34')}
		background-color: ${props => (props.packState ? '#587c34' : '#fff')};
	padding: 5px 6px 5px 6px;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

const ButtonUnpacked = styled.button`
	border: 1px solid #707070;
	border-radius: 0px 5px 5px 0px;
	border-left: none;
	color: ${props => (props.packState ? '#587c34' : '#fff')};
	background-color: ${props => (props.packState ? '#fff' : '#587c34')};
	padding: 5px 6px 5px 6px;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

const ProdPic = styled.img`
	max-width: 470px;
`;

const ProdName = styled.h4`
	color: #707070;
`;

const ProdText = styled.p`
	color: #707070;
`;

class Pricelist extends React.Component {
	constructor() {
		super();

		this.state = { packed: true };
	}
	render() {
		return (
			<div className="container">
				<div className="package mt-5 row">
					<ButtonPacked
						packState={this.state.packed}
						onClick={() => this.setState({ packed: true })}
					>
						Πακεταρισμένο
					</ButtonPacked>
					<ButtonUnpacked
						packState={this.state.packed}
						onClick={() => this.setState({ packed: false })}
					>
						Απλή συσκευασία
					</ButtonUnpacked>
				</div>

				<div className="row mt-4">
					<div className="col-3 offset-1">
						<ProdPic src={fp} alt="Product Name" />
					</div>
					<div className="col-4 ml-2 mt-2">
						<ProdName>Πεστίλη μήλου</ProdName>
						<ProdText>
							Η πεστίλη παράγεται σε ένα πολύ μεγάλο φούρνο που
							καίει πολύ ρεύμα. Αγόρασε την τώρα. Η πεστίλη
							παράγεται σε ένα πολύ μεγάλο φούρνο που καίει πολύ
							ρεύμα. Αγόρασε την τώρα.
						</ProdText>
					</div>
				</div>
			</div>
		);
	}
}

export { Pricelist };
