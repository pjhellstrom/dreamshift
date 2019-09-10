import React from "react";
import Card from 'react-bootstrap/Card'

const MgrEmpCard = (props) => {
	return (
		<div className="card">

			<Card>
				{/* {console.log(props)} */}
				<Card.Header>{props.firstname} {props.lastname}</Card.Header>
				<Card.Body>
					<Card.Text>
						<b>Email:</b> {props.username}<br/>
						<b>Home Location:</b> {props.location}<br/>
						<b>Phone #:</b> "Guys, users don't have a phone # in the DB"
					</Card.Text>
				</Card.Body>
			</Card>

		</div>
	);
}

export default MgrEmpCard;

// {
// 	"username": "aa@job.com",
// 	"firstname": "Andrew",
// 	"password": "null",
// 	"lastname": "Andrews",
// 	"location": "345 toronto st.",
// 	"isManager": false,
// 	"teamid": "1"
// },
