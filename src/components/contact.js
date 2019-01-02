import React from 'react';
import styled from 'styled-components';
import map from '../images/contact_map.png';

const H3 = styled.h3`
	color: #707070;
	&:hover {
		cursor: default;
	}
`;

const H5 = styled.h5`
	color: #707070;
	&:hover {
		cursor: default;
	}
`;

const P = styled.p`
	color: #373535;
	&:hover {
		cursor: default;
	}
`;

const Contact = () => (
	<div>
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5 mb-3 text-center">
					<H3>Contact Information</H3>
				</div>
			</div>
			<div className="row">
				<div className="col-6 text-center">
					<H5>Company HQ</H5>
					<P>Black Action Street 4, NY</P>
					<H5>Important Person</H5>
					<P>youwantit@contact.hq</P>
					<H5>Landline</H5>
					<P>555-SALES-PPL</P>
				</div>
				<div className="col-6 text-center">
					<H5>Sales represantative</H5>
					<P>jfletcher@contact.hq</P>
					<H5>Disputes</H5>
					<P>sumtinwong@contact.hq</P>
					<H5>Technical Issues</H5>
					<P>bolimekura@contact.hq</P>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<P className="mt-4 text-center">
						You can visit us during regular working hours. Our
						friendly customer support is always happy to help!
					</P>
				</div>
			</div>
		</div>

		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<H5 className="text-center">Find us here</H5>
					<img
						className="img-fluid mx-auto d-block"
						src={map}
						alt="map"
					/>
				</div>
			</div>
		</div>
	</div>
);

export { Contact };
