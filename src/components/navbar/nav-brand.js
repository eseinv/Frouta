import React from 'react';
import styled from 'styled-components';
import fp from './images/fp.png';

const FP = styled.img`
	width: 65px;
	height: auto;
	margin-top: 10px;
`;

const BrandName = styled.p`
	color: #fff;
	font-size: 35px;
	font-family: Amiri;
	font-style: italic;
	font-weight: bold;
	letter-spacing: 1.2px;
	margin-bottom: 0;
	line-height: 1;
	margin-top: 14px;
`;

const BrandPhrase = styled.p`
	color: #fff;
	font-size: 14px;
	font-family: DejaVu Math TeX Gyre;
	margin-bottom: 0;
`;

const NavBrand = () => (
	<div className="row">
		<div className="col-2 offset-2">
			<FP src={fp} />
		</div>
		<div className="col-8">
			<BrandName> FARMA PALATIA </BrandName>
			<BrandPhrase> Εργαστήριο αποξηραμένων φρούτων </BrandPhrase>
		</div>
	</div>
);

export { NavBrand };
