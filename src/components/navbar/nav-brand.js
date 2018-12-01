import React from 'react';
import styled from 'styled-components';
// import fp from '../../images/fp.png';
import fp from '../../images/fp-logo-2x.png';

const Fp = styled.img`
	max-width: 100%;
`;

const NavBrand = () => (
	<div className="row">
		<div className="col-10 offset-2">
			<Fp className="image-fluid mt-2" src={fp} alt="fp-logo-brand" />
		</div>
	</div>
);

export { NavBrand };
