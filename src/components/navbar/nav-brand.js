import React from 'react';
import { Fp } from './style';

const NavBrand = () => (
	<div className="ml-4 p-2">
		<Fp
			className="img-fluid d-none d-lg-block"
			src="https://api.farmapalatia.gr/images/fp-logo-2x.png"
			alt="fp-logo-brand"
		/>
		<Fp
			className="img-fluid mt-2 d-lg-none"
			src="https://api.farmapalatia.gr/images/FINAL_fp_logo@2x.png"
			alt="fp-logo-brand"
		/>
	</div>
);

export { NavBrand };
