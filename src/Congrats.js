import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
	if(props.success){
	return(
		<div data-test="congrats-component" className="alert alert-success">
			<span data-test="congrats-message">
				congratulation! u guessed the word!
			</span>
		</div>
	);
  } else{
  	return(
  		<div data-test="congrats-component"/>
  	)
  }
}

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
};

export default Congrats;
