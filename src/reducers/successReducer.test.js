import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial `false` state when no action is passed', () => {
	const newState = successReducer(undefined, {});
	expect(newState).toBe(false);
});
test('returns state of `true` when recieving an action of type `CORRECT_GUESSED`', () => {
	const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
	expect(newState).toBe(true);
});