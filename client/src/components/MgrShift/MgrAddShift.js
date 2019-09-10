import React, { Component } from "react";
import MgrNav from "./MgrNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Moment from "react-moment";
// import Moment from 'react-moment';
// import DateCon from "./DateCon";
// import moment from "moment";

class MgrAddShift extends Component {

	// Setting the component's initial state
	state = {
		name: "",
		description: "",
		capacity: "",
		location: "",
		date:"",
		start: "",
		end: "",
		team_id: "",
	};

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
		// console.log(event);


		// moment(event).format("MM DD YYYY")
		
		// console.log(event);
		let day = event;
		// let day = moment(event).format("MM-DD-YYYY");
		// console.log(day);
		// console.log(typeof(day),day);

		this.setState({ date: day});
		// this.setState.date = day;

	}

	render() {
		return (
			<div>
				<MgrNav/>

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
						// selected={this.state.displaydate}
						// value={this.state.displaydate}
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

					<input
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

					<button onClick={this.handleFormSubmit}>Submit</button>
				</form>
			</div>
		);
	}
}

export default MgrAddShift;


