import * as types from "../actions/actionTypes"

const ui_reducer_default_state = {
	error: false
};


export const ui_reducer = (state=ui_reducer_default_state, action)=>{
	switch(action.type){
		case types.ADD_ERROR:
		return{
			error: action.bool
		}



		default: return state
	}
}
