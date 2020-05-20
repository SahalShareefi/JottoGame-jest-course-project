import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
	let content 
	if(props.guessedWords.length === 0){
		content = ( // the ( ) is by some jsx features 
			<span data-test="guess-instructions">
				Try to guess the secter word !
			</span>
		);
	}else{
		const guessedWordsRow = props.guessedWords.map( (word, index) => (
			<tr data-test="guessed-word"key={index}>
				<td> {word.guessedWord} </td>
				<td> {word.letterMatchCount} </td>
			</tr>

		));
		content = (
		<div data-test="guessed-words">
		  <h3>Guessed Words</h3>
			<table className="table table-sm">
				<thead className="thead-light">
					<tr> <th>Guesses</th> <th>Matching letters</th> </tr>
				</thead>
				<tbody>
					{ guessedWordsRow }
				</tbody>
			</table>
		</div>
	  );
	}
	return (
		<div data-test="component-guessed-words">
			<span>
				{ content }
			</span>
		</div>
	);
}

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default GuessedWords;