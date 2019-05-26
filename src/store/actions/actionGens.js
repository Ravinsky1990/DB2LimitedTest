import * as types from "./actionTypes"

export const add_task=(task)=>{
	return{
		type:types.ADD_TASK,
		task
	}
};

export const add_error=(bool)=>{
	return{
		type:types.ADD_ERROR,
		bool
	}
};

export const remove_all=()=>{
	return{
		type:types.REMOVE_ALL,
	}
};

export const add_filter=(filterText)=>{
	return{
		type:types.ADD_FILTER,
		filterText
	}
};

export const delete_task=(id)=>{
	return{
		type:types.DELETE_TASK,
		id
	}
};
