import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
	test('returns an action with CORRECT_GUESS type', () => {
		const action = correctGuess();
		expect(action).toEqual( {type: actionTypes.CORRECT_GUESS} ); // we use toEqual() that compare the contents instead of using toBe() that compare the type & content '==='
	});
});