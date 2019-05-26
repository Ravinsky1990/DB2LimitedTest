import React from "react";
import ListItem from "./ListItem";
import { connect } from 'react-redux';
import select from "../../helpers/select"

const list = (props)=>{
	let tastList
	if(props.tasks.length === 0){
		tastList=undefined
	}else{
		tastList = props.tasks.map((task,i)=>{
			return <ListItem i={i+1} content={task} key={task.id} />
		})
	}

	return(
		<div className="list">
			{props.error ?
			<p className="list__error">Please add a task!</p>:undefined}
			{tastList}
		</div>
	)
}

const mapStateToProps = state => {
    return {
        error: state.ui.error,
        tasks: select(state.tasks,state.filters.text)
    };
};

export default connect(mapStateToProps,undefined)(list)