import React, { Component } from "react";
// import MgrNav from "./MgrNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button'

// import Moment from 'react-moment';
// import moment from "moment";



class MgrShiftUp extends Component {

	// Setting the component's initial state on passedin props
	
	state = {
		name: this.props.name,
		description: this.props.description,
		capacity: this.props.capacity,
		location: this.props.location,
		date: "",
		start: this.props.start,
		end: this.props.end,
		team_id: this.props.team_id,
	};

	//date is blank because this.props.date will crash the page, bad things happen.
	// start & end times not displaying in form, possibly due to date format conflicts.

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
	};

	handleSelect = event => { //Handles datepicker picking date
		let day = event;
		this.setState({ date: day});
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<form className="form">

					<input
						value={this.state.name}
						name="name"
						onChange={this.handleInputChange}
						type="text"						
					/><br/>

					<DatePicker 
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
					
					/><br/>

					End Time
					<input
						value={this.state.end}
						name="end"
						onChange={this.handleInputChange}
						type="time"
					
					/><br/>

					<input
						value={this.state.location}
						name="location"
						onChange={this.handleInputChange}
						type="text"
					
					/><br/>

					<input
						value={this.state.description}
						name="description"
						onChange={this.handleInputChange}
						type="text"
					/><br/>

					<input
						value={this.state.capacity}
						name="capacity"
						onChange={this.handleInputChange}
						type="number"
						min="1"
					/><br/>

					<Button onClick={this.handleFormSubmit}>Submit</Button>
				</form>
			</div>
		);
	}
}

export default MgrShiftUp;


