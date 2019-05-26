import React,{Component} from "react";
import { connect } from 'react-redux';
//actions
import {add_task} from "../../store/actions/actionGens";
import {add_error} from "../../store/actions/actionGens";

class Input extends Component{
	state={
		value:""
	}

	onChangeHandle=(event)=>{
		let value = event.target.value;
		this.setState(()=>{
			return{
				value:value
			}
		})
	}

	onSubmitHandler=(event)=>{
		event.preventDefault();
		//validation
		if(this.state.value === ''){
			this.props.addError(true)
		}
		else{
			this.props.addError(false)
			let text = this.state.value.trim();
			this.props.addTask(text);
			this.setState(()=>{
			return{
				value:""
			}
		})
		}
	}


    render(){
        return(
            <form className="form" onSubmit={this.onSubmitHandler}>
                <input type="text"
	                className="form__input"
	                value={this.state.value}
	                onChange={this.onChangeHandle}/>
                <button className="btn btn-success btnAdd">Add task</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (task) => dispatch(add_task(task)),
        addError:(bool) => dispatch(add_error(bool))
    };
};


export default connect(null, mapDispatchToProps)(Input);

