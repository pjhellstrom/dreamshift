import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import API from "../../utils/api";

class MgrApprovalCard extends Component{

	approve = (shiftId, userId) =>{
		console.log("shiftId " + shiftId);
		console.log("userId " + userId);
		// Make Call here
	}

	reject = (shiftId, userId) =>{
		console.log("shiftId " + shiftId);
		console.log("userId " + userId);
		// Make Call here
	}

	render(){

		if (this.props.pendingShifts.length != 0) {
			return (
				<div className="card">
					<Card>
						<Card.Header>{this.props.firstName} {this.props.lastName}</Card.Header>
						<Card.Body>
							
							{this.props.pendingShifts.map(
						
								(shift, i) => (
									<Card.Text key={i}>
										<b>Shift:</b> {shift.name}<br/>
										<b>Date:</b> <Moment format="MMM-DD-YYYY">{shift.date}</Moment><br/>
										<b>Time:</b> {shift.start} to {shift.end}<br/>
										<b>Have/Require:</b> {shift.claimed}/{shift.capacity}<br/>

										<Button 
											variant="outline-primary" 
											onClick={() => this.approve(shift._id, this.props._id)}>
												<i className="far fa-thumbs-up fa-2x"></i>
										</Button>
										<Button 
											variant="outline-danger" 
											onClick={() => this.reject(shift._id, this.props._id)}>
											<i className="far fa-thumbs-down fa-2x"></i>
										</Button>
										<hr/>
									</Card.Text>
								)
							)}

						</Card.Body>
						<Card.Footer >
							
						</Card.Footer>
					</Card>

				</div>
			);
			
		}
		else {return("");}
	}
}

export default MgrApprovalCard;
