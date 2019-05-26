import React ,{Component} from "react";
import { connect } from 'react-redux';
import {add_filter} from "../../store/actions/actionGens"


class SearchInput extends Component{
	onChangeInput=(ev)=>{
		let value = event.target.value;
		this.props.addFilter(value)
	}

	render(){
		return(
			<form className="searchInput">
				<input className="searchInput__input"
				 type="text" placeholder="search"
				 onChange={this.onChangeInput}/>
			</form>
		)
	}
}

const mapStateToProps = state => {
    return {
        filterText:state.filters.text
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFilter: (filterText)=>dispatch(add_filter(filterText))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(SearchInput)