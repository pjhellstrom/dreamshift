import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MgrShiftUP from './MgrShiftUp';
import API from "../../utils/api";

import Moment from 'react-moment';
import moment from "moment";


class ShiftCard extends Component{
	state = {
		showupdate: false,
		showconfirm: false,
	};

	deleShift = (id) =>{
		console.log(id)
		this.setState({ showconfirm: this.state.showconfirm ? false : true })
	}

	confirmDele = (id) =>{
		console.log(id)
		API.deleShift(id)
		.then(res =>
			{
				console.log(res.data);
			})
		.catch(err => console.log(err));
	}

	noDele = () =>{
		this.setState({ showconfirm: this.state.showconfirm ? false : true })
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
							<b>Date:</b> <Moment format="MMM-DD-YYYY">{this.props.date}</Moment><br/>
							<b>Time:</b> 
								{this.props.start} to 
								{this.props.end}<br/>
							<b>Location:</b> {this.props.location}<br/>
							<Button variant="outline-success" onClick={() => this.updateShift(this.props.shiftid)}>Update</Button>
							<Button variant="outline-warning" onClick={() => this.deleShift(this.props.shiftid)}>Remove</Button>
						</Card.Text>
					</Card.Body>

					{/* Footer for updating shifts */}
					<Card.Footer style={ { display: this.state.showupdate ? '' : 'none' } } >
						<MgrShiftUP
							{...this.props}
						/>
					</Card.Footer>

					{/* Footer for removing shifts */}
					<Card.Footer style={ { display: this.state.showconfirm ? '' : 'none' } } >
						Are you Sure?
						<Button variant="danger" onClick={() => this.confirmDele(this.props._id)}>Yes</Button>
						<Button variant="primary" onClick={() => this.noDele()}>No</Button>
					</Card.Footer>

				</Card>

			</div>
		);
	}
}

export default ShiftCard;