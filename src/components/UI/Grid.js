import React from "react";

const grid = (props)=>{
	return(
		<div className="container">
			<div className="row justify-content-center">
				<div className={props.classes.join(" ")}>
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default grid