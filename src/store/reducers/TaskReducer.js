import * as types from "../actions/actionTypes"
const taskReducer_Initial_State = [];
import uuid from "uuid"


export const task_reducer = (state=taskReducer_Initial_State, action)=>{
	switch(action.type){
		case types.ADD_TASK : 
		return state.concat({text:action.task, id: uuid()});

		//removeAll
		case types.REMOVE_ALL:
		return[];

		//delete task
		case types.DELETE_TASK:
		return state.filter((task)=>{
			return task.id !== action.id
		})


		default: return state
	}
}
