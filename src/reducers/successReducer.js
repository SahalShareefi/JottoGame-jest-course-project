import { actionTypes } from '../actions'; 


// way of mine
export default (state=false, action) => {
	if(action.type == actionTypes.CORRECT_GUESS )
		return true;
	else
		return false;
}

// way of course 
/*export default (state=false, action) => {
	switch(action.type){
		case (actionTypes.CORRECT_GUESS):
			return true;
		default:
			return false;
	}
}*/