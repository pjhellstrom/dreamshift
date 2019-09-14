import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class MgrAddEmp extends Component {

	// Setting the component's initial state
	state = {
		firstName: "",
		lastName: "",
		location: "",
		phoneNumber: "",
		username:"",
		teamId: "5d77e45fb112c824efae3718",

		showAddEmp: false
	};

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

	// **** NOTE: Should take team_id from user inputing data (manager team_id) Hard coding for now ****

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		console.log(this.state)
	};

	showForm = () =>{
		this.setState({ showAddEmp: this.state.showAddEmp ? false : true })
	}

	render() {
		return (
			<div>
				<Card>
					<Card.Header> 
						<Button onClick={() => this.showForm()}>
							<i className="fas fa-user-plus fa-2x"></i> Add Team Member
						</Button>
					</Card.Header>
					<Card.Body style={ { display: this.state.showAddEmp ? '' : 'none' } }>

						<form className="form">

							<input
								value={this.state.name}
								name="firstName"
								onChange={this.handleInputChange}
								type="text"
								placeholder="First Name"
							/><br/>

							<input
								value={this.state.name}
								name="lastName"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Last Name"
							/><br/>

							<input
								value={this.state.location}
								name="location"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Home Location"
							/><br/>

							<input
								value={this.state.description}
								name="phoneNumber"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Phone Number"
							/><br/>

							<input
								value={this.state.description}
								name="username"
								onChange={this.handleInputChange}
								type="text"
								placeholder="e-Mail"
							/><br/>

							<Button onClick={this.handleFormSubmit}>Submit</Button>
						</form>

					</Card.Body>
				</Card>

				
			</div>
		);
	}
}

export default MgrAddEmp;


