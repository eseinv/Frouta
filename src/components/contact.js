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
					<H3>Στοιχεία Επικοινωνίας</H3>
				</div>
			</div>
			<div className="row">
				<div className="col-12 text-center border mb-4">
					<P>Μηλιές Πηλίου, Νομός Θεσσαλίας</P>
					<P>Τηλέφωνο: 6945296507</P>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<H5 className="text-center">Βρείτε μας εδώ</H5>
						<img
							className="img-fluid mx-auto d-block"
							src={map}
							alt="map"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export { Contact };
