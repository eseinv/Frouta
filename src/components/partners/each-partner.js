import React from 'react';
import PropTypes from 'prop-types';
import { PartnerCard, H5, P, ShopType } from './style';

const EachPartner = props => {
	const { partner } = props;
	return (
		<PartnerCard className="card border-0">
			<div>
				<H5>{partner.name}</H5>
				<ShopType>{partner.type}</ShopType>
			</div>
			<P>{partner.address}</P>
			{/* <img
				className="img-fluid"
				src={`https://api.farmapalatia.gr/images/partners/${
					partner.image
				}`}
				alt={partner.name}
			/> */}
		</PartnerCard>
	);
};

EachPartner.propTypes = {
	partner: PropTypes.object,
};

export { EachPartner };
