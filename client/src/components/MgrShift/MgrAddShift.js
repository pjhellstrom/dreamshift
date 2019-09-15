import React, { Component } from "react";
import MgrNav from "./MgrNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import API from "../../utils/api";

// import Moment from 'react-moment';
// import moment from "moment";

class MgrAddShift extends Component {

	// Setting the component's initial state
	state = {
		name: "",
		description: "",
		claimed: 0,
		capacity: "",
		location: "",
		date:"",
		start: "",
		end: "",
		teamId: "5d77e45fb112c824efae3718",
	};

	// name: { type: String, trim: true, required: true },
	// description: { type: String, trim: true, required: true },
	// claimed: { type: Number, trim: true, required: true },
	// capacity: { type: Number, trim: true, required: true },
	// location: { type: String, trim: true, required: true },
	// date: { type: Date, required: true },
	// start: { type: String, required: true },
	// end: { type: String, required: true },
	// teamId: { type: String, required: true }

	// **** NOTE: Should take team_id from user inputing data (manager team_id) ****

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

		API.addShift(this.state)
		.then(res =>
			{
				console.log(res.data);
				this.setState({ employees: res.data })
			}
			)
		.catch(err => console.log(err));

	};

	handleSelect = event => { //Handles datepicker picking date
		let day = event;
		this.setState({ date: day});
	}

	render() {
		return (
			<div>
				<MgrNav/>

				<Card>

					<Card.Header>
						Add New Shift
					</Card.Header>

					<Card.Body>

						<form className="form">

							<input
								value={this.state.name}
								name="name"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Shift Name"
							/><br/>

							<DatePicker 
								placeholderText="Click to select a date"
								selected={this.state.date}
								value={this.state.date}
								onSelect={this.handleSelect} //when day is clicked
							/><br/>

							Start Time
							<input
								value={this.state.start}
								name="start"
								onChange={this.handleInputChange}
								type="time"
								placeholder="Start Time"
							/><br/>

							End Time
							<input
								value={this.state.end}
								name="end"
								onChange={this.handleInputChange}
								type="time"
								placeholder="End Time"
							/><br/>

							<input
								value={this.state.location}
								name="location"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Location"
							/><br/>

							<textarea
								value={this.state.description}
								name="description"
								onChange={this.handleInputChange}
								type="text"
								placeholder="Job Description"
							/><br/>

							<input
								value={this.state.capacity}
								name="capacity"
								onChange={this.handleInputChange}
								type="number"
								placeholder="Number of positions"
								min="1"
							/><br/>

							<Button onClick={this.handleFormSubmit}>Submit</Button>
						</form>

					</Card.Body>
				</Card>

			</div>
		);
	}
}

export default MgrAddShift;


