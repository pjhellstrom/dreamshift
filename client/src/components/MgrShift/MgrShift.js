import React, { Component } from "react";
import MgrNav from "./MgrNav";
import ShiftCard from "./ShiftCard";
// import shifts from "../../fakedata/shift.json";
import API from "../../utils/api";

class MgrShift extends Component {
	state= {
		teamInfo:[],
	}

	componentWillMount(){
		API.getTeam("5d77e45fb112c824efae3718")
		.then(res =>
			{
				console.log(res.data);
				this.setState({ teamInfo: res.data }, () => console.log("a value is "+ this.state.teamInfo));
			}
			)
		.catch(err => console.log(err));
	}

	render() {
		return (

			<div>

				<MgrNav/>
				<div>
					<h1>Manager Page</h1>

					{/* get real data============== */}
					{this.state.teamInfo.map(
						(shifts,i)=>(
							<ShiftCard
							{...shifts} // Breaks out shift data for rendering each card
							key={i} // Gives each card a react key i
							deleShift={this.deleShift}
							updateShift={this.updateShift}
						/>
						)
					)}

				</div>
			</div>
		);
	}
}

export default MgrShift;