import React from 'react';
import PropTypes from 'prop-types';

const Score = props => (
	<div
		className="text-center text-primary h2 mb-3 hand"
		onClick={() => props.reset()}
		onKeyDown={() => props.reset()}
	>
		Current count is: {props.score}
	</div>
);

Score.propTypes = {
	score: PropTypes.number,
	reset: PropTypes.func,
};

export { Score };
