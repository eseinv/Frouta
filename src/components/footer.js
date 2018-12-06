import React from 'react';
import styled from 'styled-components';
import { Facebook } from '../icons/';
import { Skype } from '../icons/';
import { Phone } from '../icons/';

const Hr = styled.hr`
	color: #587c34;
`;

const ContactText = styled.p`
	color: #707070;
	font-size: 18px;
	letter-spacing: 1.1px;
`;

const Footer = () => (
	<div className="container mt-5 pb-5">
		<div className="row">
			<Hr className="col-8 offset-2" />
		</div>
		<div className="row">
			<div className="col-12 text-center">
				<ContactText>Επικοινωνήστε μαζί μας</ContactText>
			</div>
		</div>
		<div className="row offset-5">
			<div className="col-1">
				<Facebook color="#00a062" />
			</div>
			<div className="col-1">
				<Skype color="#00a062" />
			</div>
			<div className="col-1">
				<Phone color="#00a062" />
			</div>
		</div>
	</div>
);

export { Footer };
