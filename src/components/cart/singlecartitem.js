import React from 'react';
import PropTypes from 'prop-types';
import {
	DisabledInput,
	TextDiv,
	PMB,
	P,
	H5,
	Del,
	Button,
	DelContainer,
} from './style';

const SingleCartItem = props => {
	const { image, name, unitPrice, id, quantity } = props.item;
	return (
		<div className="card my-2">
			<div className="card-body">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-3">
						<img
							className="img-fluid"
							src={`https://api.farmapalatia.gr/images/products/${image}`}
							alt={name}
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-5">
						<H5 className="card-title d-inline pl-2 pt-1 d-block">
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
					<TextDiv className="col-sm-12 col-md-12 col-lg-3">
						<h4>
							<span className="font-weight-light small d-block pt-2 pl-3">
								<b>Σύνολο</b>
							</span>
							<strong className="d-block pl-3">
								{unitPrice * quantity}
								&euro;
							</strong>
						</h4>
					</TextDiv>
					<DelContainer className="col-sm-12 col-md-12 col-lg-1">
						<Del
							className="btn"
							onClick={() => props.deleteProd(id)}
						>
							x
						</Del>
					</DelContainer>
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
