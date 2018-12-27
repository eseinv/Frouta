import React from 'react';
import styled from 'styled-components';
import fp from '../images/fp.png';

const LeftButtonRadius = '5px 0 0 5px';
const RightButtonRadius = '0 5px 5px 0';

const ButtonPacked = styled.button`
	border: 1px solid #707070;
	border-radius: ${props =>
		props.type === 'left' ? LeftButtonRadius : RightButtonRadius}
	border-right-width: ${props => (props.type === 'left' ? '0' : '1')};
	border-left-width: ${props => (props.type === 'right' ? '0' : '1')};
	color: ${props => (props.active ? '#fff' : '#587c34')}
		background-color: ${props => (props.active ? '#587c34' : '#fff')};
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

const Input = styled.input`
	width: 25%;
	border: none;
	border-bottom: 3px solid #707070;
	background-color: inherit;
	color: #707070;
	text-align: center;
`;

class Pricelist extends React.Component {
	constructor() {
		super();

		this.state = { packed: 1, quantity: 0 };
	}
	handleChange(value) {
		this.setState({ quantity: value.replace(/\D/, '') });
	}
	render() {
		// console.log(typeof parseInt(this.state.quantity, 10));
		return (
			<div className="container">
				<div className="package mt-5 row">
					<ButtonPacked
						type="left"
						active={this.state.packed === 1}
						onClick={() =>
							this.setState({
								packed: 1,
							})
						}
					>
						Πακεταρισμένο
					</ButtonPacked>
					<ButtonPacked
						active={this.state.packed === 2}
						type="right"
						onClick={() =>
							this.setState({
								packed: 2,
							})
						}
					>
						Απλή συσκευασία
					</ButtonPacked>
				</div>

				<div className="row mt-4">
					<div className="col-sm-12 col-md-3 offset-1">
						<ProdPic src={fp} alt="Product Name" />
					</div>
					<div className="col-sm-12 col-md-4 ml-2 mt-2">
						<ProdName>Πεστίλη μήλου</ProdName>
						<ProdText>
							Η πεστίλη παράγεται σε ένα πολύ μεγάλο φούρνο που
							καίει πολύ ρεύμα. Αγόρασε την τώρα. Η πεστίλη
							παράγεται σε ένα πολύ μεγάλο φούρνο που καίει πολύ
							ρεύμα. Αγόρασε την τώρα.
						</ProdText>
						<label htmlFor="quantity" className="d-block">
							Ποσότητα
						</label>
						<Input
							id="quantity"
							onChange={event =>
								this.handleChange(event.target.value)
							}
							placeholder="Ποσότητα..."
							type="text"
							value={this.state.quantity}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export { Pricelist };
