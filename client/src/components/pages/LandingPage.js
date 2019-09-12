import React, { Component } from "react";
import { Link } from "react-router-dom";
// import api from "../utils/api";
import Button from 'react-bootstrap/Button'


class LandingPage extends Component {

	state = {
		username: "",
		password: "",
	};

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



	render() {
		return (
			<div>

				<form className="form">

					<input
						value={this.state.name}
						name="username"
						onChange={this.handleInputChange}
						type="text"
						placeholder="User Name"
					/><br/>

					<input
						value={this.state.name}
						name="password"
						onChange={this.handleInputChange}
						type="password"
						placeholder="Password"
					/><br/>


					<Button onClick={this.handleFormSubmit}>Submit</Button>
				</form>


				<div>
					<h1>Landing Page</h1>
					<p>This will need to be replaced with a proper login page</p>
				</div>
				<button className="btn btn-primary">
					<Link
						to="/managerview"
						className={window.location.pathname === "/managerview"}
						style={{ color: "white" }}
					>
						Login As Manager
					</Link>
				</button>
				<button className="btn btn-primary">
					<Link
						to="/employeeview"
						className={window.location.pathname === "/employeeview"}
						style={{ color: "white" }}
					>
						Login As Employee
					</Link>
				</button>

			</div>
		);
	}
}

export default LandingPage;
