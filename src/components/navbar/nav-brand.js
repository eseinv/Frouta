import React from 'react';
import { FpBig } from './style';
import { BrandWrapper } from './style';

const NavBrand = () => (
	<BrandWrapper className="ml-4 p-2">
		<FpBig
			className="img-fluid"
			src="https://api.farmapalatia.gr/images/fp-logo-2x.png"
			alt="fp-logo-brand"
		/>
	</BrandWrapper>
);

export { NavBrand };
