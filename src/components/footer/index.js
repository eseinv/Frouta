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
			<div className="col-12">
				<ContactText className="text-center">
					Επικοινωνήστε μαζί μας
				</ContactText>
			</div>
		</div>
		<div className="row d-flex justify-content-center">
			<button className="btn col-2 col-xs-2 col-sm-2 col-md-2 col-lg-1">
				<a
					href="https://www.facebook.com/farmapalatia/"
					target="_blank"
				>
					<Facebook color="#00a062" />
				</a>
			</button>
			<button className="btn col-2 col-xs-2 col-sm-2 col-md-2 col-lg-1 mx-2">
				<a href="skype:s_khodar?chat">
					<Skype color="#00a062" />
				</a>
			</button>
			<button className="btn col-2 col-xs-2 col-sm-2 col-md-2 col-lg-1">
				<a href="viber://chat?number=+306945296507">
					<Phone color="#00a062" />
				</a>
			</button>
		</div>
	</div>
);

export { Footer };
