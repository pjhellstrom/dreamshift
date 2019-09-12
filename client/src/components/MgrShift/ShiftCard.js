// import React from "react";
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MgrShiftUP from './MgrShiftUp';


class ShiftCard extends Component{
	state = {
		showupdate: false,
		showconfirm: false,
	};

	deleShift = (id) =>{
		console.log(id)
		this.setState({ showconfirm: this.state.showconfirm ? false : true })
		// Add call to remove shift
	}

	updateShift = (id) =>{
		console.log(id);
		this.setState({ showupdate: this.state.showupdate ? false : true })

	}

	render(){
		return (
			<div className="card">
				

				<Card id={`${this.props.shiftid}`}>
					
					<Card.Header>{this.props.name}</Card.Header>
					<Card.Body>
						
						<Card.Text>
							<b>Date:</b> {this.props.date}<br/>
							<b>Time:</b> {this.props.start} to {this.props.end}<br/>
							<b>Location:</b> {this.props.location}<br/>
							<Button variant="outline-success" onClick={() => this.updateShift(this.props.shiftid)}>Update</Button>
							<Button variant="outline-warning" onClick={() => this.deleShift(this.props.shiftid)}>Remove</Button>
						</Card.Text>
					</Card.Body>
					<Card.Footer style={ { display: this.state.showupdate ? '' : 'none' } } >
						<MgrShiftUP
							// props= {this.props}
							{...this.props}
						/>
						
					</Card.Footer>
					<Card.Footer style={ { display: this.state.showconfirm ? '' : 'none' } } >
						Are you Sure?
						<Button variant="danger">Yes</Button>
						<Button variant="primary">No</Button>
					</Card.Footer>


				</Card>

			</div>
		);
	}
}

export default ShiftCard;