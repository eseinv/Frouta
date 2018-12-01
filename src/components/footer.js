import React from 'react';
import styled from 'styled-components';
import fb from '../icons/facebook-footer.png';
import skype from '../icons/skype-footer.png';
import phone from '../icons/phone-footer.png';
import { Facebook } from '../icons/';
const Hr = styled.hr`
	color: #587c34;
`;

const ContactText = styled.p`
	color: #707070;
	font-size: 18px;
	letter-spacing: 1.1px;
`;

const Img = styled.img`
	max-width: 35px;
	&:hover {
		cursor: pointer;
	}
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
				<Img src={skype} alt="skype-contact" />
			</div>
			<div className="col-1">
				<Img src={phone} alt="phone-contact" />
			</div>
		</div>
	</div>
);

export { Footer };
