import React, { Component } from "react";
import MgrNav from "./MgrNav";
import ShiftCard from "./ShiftCard";
import shifts from "../../fakedata/shift.json";
import API from "../../utils/api";

class MgrShift extends Component {

	// deleShift = (id) =>{
	// 	console.log(id)
	// 	// Add call to remove shift
	// }

	// updateShift = (id) =>{
	// 	console.log(id)

	// }

	getData = (id) =>{
		API.getTeam(id)
		.then(res => console.log(res))
		.catch(err => console.log(err));
		console.log("inside function ");
	}


	render() {




		return (

			<div>

				<MgrNav/>
				<div>
					<h1>Manager Page</h1>

					{/* mapping through dummy data change to real data in production */}
					{shifts.map(
						(shifts, i) => (
						<ShiftCard
							{...shifts} // Breaks out shift data for rendering each card
							key={i} // Gives each card a react key i
							// deleShift={this.deleShift}
							// updateShift={this.updateShift}
						/>
						)
					)}
					{	this.getData("5d77e45fb112c824efae3718")}
					{/* <ShiftCard/> */}

				</div>
			</div>
		);
	}
}

export default MgrShift;