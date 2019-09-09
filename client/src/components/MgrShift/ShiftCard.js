import React from "react";
import Card from 'react-bootstrap/Card'

const ShiftCard = (props) => {
	return (
		<div className="card">

			<Card>
				{/* {console.log(props)} */}
				<Card.Header>{props.name}</Card.Header>
				<Card.Body>
					{/* <Card.Title>Special title treatment</Card.Title> */}
					<Card.Text>
						<b>Date:</b> {props.date}<br/>
						<b>Time:</b> {props.start} to {props.end}<br/>
						<b>Location:</b> {props.location}
					</Card.Text>
				</Card.Body>
			</Card>

		</div>
	);
}

export default ShiftCard;

// "name" : "Donut Defroster",
// "description" : "Make tasty donuts for our customers",
// "capacity" : 1,
// "location" :  "124 University Ave",
// "date" : "09-11-2019",
// "start" : "0600",
// "end" : "1000",
// "team_id" : 1
