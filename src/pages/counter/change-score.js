import React from 'react';
import PropTypes from 'prop-types';

const ChangeScore = props => (
	<button
		className={`btn m-1 ${
			props.action === 'less' ? 'btn-secondary' : 'btn-danger'
		}`}
		onClick={() => {
			props.countFunc(props.action === 'less' ? -1 : 1);
		}}
	>
		{props.children}
	</button>
);

ChangeScore.propTypes = {
	action: PropTypes.string,
	countFunc: PropTypes.func,
	children: PropTypes.string,
};

export { ChangeScore };
