import React, {Component} from "react";
import SearchInput from "../SearchInput/SearchInput"
import { connect } from 'react-redux';
import {remove_all} from "../../store/actions/actionGens"

class Options extends Component{
	onRemove=()=>{
		this.props.removeAll()
	}

	render(){
		return(
		<div className="options">
			<h4 className="options__title">Your options</h4>
			<SearchInput/>
			<button className="btn btn-danger optionBtn" onClick={this.onRemove}>Remove all</button>
		</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
    return {
        removeAll:()=>dispatch(remove_all())
    };
};

export default connect(null, mapDispatchToProps)(Options)