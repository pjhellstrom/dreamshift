import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// const MgrEmpCard = (this.props) => {
class MgrEmpCard extends Component{
	state = {
		showconfirm: false,
	};

	deleEmp = (id) =>{
		this.setState({ showconfirm: this.state.showconfirm ? false : true })
		console.log(id)
	}

	confirmDele = (id) =>{
		console.log(id)
		// add method to dele emp here
	}

	noDele = () =>{
		this.setState({ showconfirm: this.state.showconfirm ? false : true })
	}

	render(){
		return (
			<div className="card">

				<Card id={`${this.props._id}`} >
					<Card.Header>{this.props.firstName} {this.props.lastName}</Card.Header>
					<Card.Body>
						<Card.Text>
							<b>Email:</b> {this.props.username}<br/>
							<b>Home Location:</b> {this.props.location}<br/>
							<b>Phone #:</b> {this.props.phoneNumber}
						</Card.Text>
						<Button variant="outline-warning" onClick={() => this.deleEmp(this.props._id)}>Remove Employee</Button>
					</Card.Body>
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

export default MgrEmpCard;

// REAL DATA
// firstName: "Yating"
// isManager: false
// lastName: "Su"
// location: "745 Vaughan st."
// phoneNumber: "123-456-8080"
// shifts: []
// teamId: "5d77e45fb112c824efae3718"
// username: "employee3@qwe.com"
// __v: 0
// _id: "5d77eb76c1a9c9261d6dabc3"