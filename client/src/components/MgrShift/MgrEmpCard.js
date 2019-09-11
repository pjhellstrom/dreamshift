import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MgrEmpCard = (props) => {
	return (
		<div className="card">

			<Card id={`${props.userid}`} >
				{/* {console.log(props)} */}
				<Card.Header>{props.firstname} {props.lastname}</Card.Header>
				<Card.Body>
					<Card.Text>
						<b>Email:</b> {props.username}<br/>
						<b>Home Location:</b> {props.location}<br/>
						<b>Phone #:</b> {props.phoneNumber}
					</Card.Text>
					<Button variant="outline-warning" onClick={() => props.deleEmp(props.userid)}>Remove Employee</Button>
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
