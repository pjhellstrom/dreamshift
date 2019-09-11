import React, { Component } from "react";
import MgrNav from "./MgrNav";
import ShiftCard from "./ShiftCard";
import shifts from "../../fakedata/shift.json";
import API from "../../utils/api";

class MgrShift extends Component {



	render() {
		API.getManager()
		.then(res => console.log(res))
		.catch(err => console.log(err));

		return (
			<div>
				<MgrNav/>
				<div>
					<h1>Manager Page</h1>

					{/* mapping through dummy data change to real data in production */}
					{shifts.map(
						(shifts, i) => (

							
						<ShiftCard
							{...shifts} // Breaks out mem data for rendering each card
							key={i} // Gives each card a react key i
							/>

						)
					)}

					{/* <ShiftCard/> */}

				</div>
			</div>
		);
	}
}

export default MgrShift;


// {cards.map(
// 	(cards, i) => (<MemCard
// 		{...mem[cards]} // Breaks out mem data for rendering each card
// 		key={i} // Gives each card a react key i
// 		cardClick={this.cardClick} // This is where the click function gets passed in
// 		/>)
// )}
