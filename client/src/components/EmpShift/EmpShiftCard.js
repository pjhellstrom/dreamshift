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
