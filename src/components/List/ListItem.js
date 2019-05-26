import React,{Component} from "react";
import { connect } from 'react-redux';
import {delete_task} from "../../store/actions/actionGens"

class ListItem extends Component{
	state={
		done:false
	}

	onRemoveItem=()=>{
		this.props.removeeItem(this.props.content.id);
	}
	onDone=()=>{
		this.setState((prevState)=>{
			return{
				done:true
			}
		})
	}

	render(){
		return(
			<div className="listItem" >
				<p className="listitem__content"
				style={{
					textDecoration: this.state.done?"line-through":"none"
				}}
				>{this.props.i}. {this.props.content.text}</p>
				<div className="listItem__btnWrap">
					<button className="btn btn-success list__button"
					disabled={this.state.done}
					onClick={this.onDone}>Done</button>
					<button className="btn btn-danger" onClick={this.onRemoveItem}>Remove</button>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
    return {
        removeeItem:(id)=>dispatch(delete_task(id))
    };
};

export default connect(null, mapDispatchToProps)(ListItem)