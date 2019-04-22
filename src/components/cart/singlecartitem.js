import React from 'react';
import PropTypes from 'prop-types';
import { DisabledInput, TextDiv, PMB, P, H5, Del, Button } from './style';

const SingleCartItem = props => {
	const { image, name, unitPrice, id, quantity } = props.item;
	return (
		<div className="card my-2">
			<div className="card-body">
				<div className="row">
					<div className="col-3 d-flex align-self-center">
						<img
							className="img-fluid"
							src={`https://api.farmapalatia.gr/images/products/${image}`}
							alt={name}
						/>
					</div>
					<div className="col-6">
						<H5 className="card-title d-inline pl-3 d-block">
							{name}
						</H5>
						<div className="pl-3">
							<PMB>
								<strong>Τιμή: {unitPrice}</strong>
								&euro;
							</PMB>
							<P className="mb-0">Ποσότητα</P>
							<Button
								type="minus"
								onClick={() => props.handleChange('minus', id)}
							>
								-
							</Button>
							<DisabledInput value={quantity} readOnly />
							<Button
								type="plus"
								onClick={() => props.handleChange('plus', id)}
							>
								+
							</Button>
						</div>
					</div>
					<TextDiv className="col-2 d-flex align-items-center justify-content-center">
						<h4 className="card-text text-center">
							<p className="font-weight-light">Σύνολο</p>
							<strong>{unitPrice * quantity}</strong>
							&euro;
						</h4>
					</TextDiv>
					<div className="col-1 d-flex align-items-center justify-content-center">
						<Del
							className="btn"
							onClick={() => props.deleteProd(id)}
						>
							x
						</Del>
					</div>
				</div>
			</div>
		</div>
	);
};

SingleCartItem.propTypes = {
	item: PropTypes.object,
	deleteProd: PropTypes.func,
	handleChange: PropTypes.func,
};

export { SingleCartItem };
