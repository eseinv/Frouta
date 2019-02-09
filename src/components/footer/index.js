import React from 'react';
import { Facebook } from '../../icons/';
import { Skype } from '../../icons/';
import { Phone } from '../../icons/';
import { Hr, ContactText } from './style';

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
		<div className="row offset-sm-4 offset-md-4 offset-lg-5">
			<div className="col-xs-4 col-sm-2 col-md-2 col-lg-1">
				<Facebook color="#00a062" />
			</div>
			<div className="col-xs-4 col-sm-2 col-md-2 col-lg-1 ">
				<Skype color="#00a062" />
			</div>
			<div className="col-xs-4 col-sm-2 col-md-2 col-lg-1 ">
				<Phone color="#00a062" />
			</div>
		</div>
	</div>
);

export { Footer };
