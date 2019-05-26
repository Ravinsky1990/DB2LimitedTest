import * as types from "../actions/actionTypes"

const filters_reducer_default_state = {
	text: ""
};


export const filters_reducer = (state=filters_reducer_default_state, action)=>{
	switch(action.type){
		case types.ADD_FILTER:
		return{
			text: action.filterText
		}

		default: return state
	}
}
