import React from 'react';
import { H3, H5, P, Subtitle } from './style';

const Contact = () => (
	<div>
		<div className="container">
			<div className="row">
				<div className="col-12 mt-5 mb-3 text-center">
					<H3>Στοιχεία Επικοινωνίας</H3>
				</div>
			</div>
			<div className="row">
				<div className="col-12 text-center border-top mb-4">
					<H5>
						<em>FARMA PALATIA</em>
					</H5>
					<Subtitle>
						<em>Εργαστήριο αποξηραμένων φρούτων</em>
					</Subtitle>
					<P>Μηλιές Πηλίου, Νομός Θεσσαλίας, T.K. 370 10</P>
					<P>Τηλέφωνο: 6945296507</P>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<H5 className="text-center">Βρισκόμαστε εδώ</H5>
						<img
							className="img-fluid mx-auto d-block"
							src="https://api.farmapalatia.gr/images/contact_map.png"
							alt="map"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export { Contact };
