import React from 'react';
import { FpBig, FpSmall } from './style';

const NavBrand = () => (
	<div className="ml-4 p-2">
		<FpBig
			className="img-fluid"
			src="https://api.farmapalatia.gr/images/fp-logo-2x.png"
			alt="fp-logo-brand"
		/>
		<FpSmall
			className="img-fluid mt-2"
			src="https://api.farmapalatia.gr/images/FINAL_fp_logo@2x.png"
			alt="fp-logo-brand"
		/>
	</div>
);

export { NavBrand };
