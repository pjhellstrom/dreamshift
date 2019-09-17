import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/api";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import API from "../../utils/api";
import "./style.css";

class LandingPage extends Component {
  state = {
    username: "",
    password: "",
    userId: "",
    teamId: "",
    isManager: ""
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

    console.log("In handleFormSubmit, authenticating this user", this.state);

    API.authUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        console.log("In callback from API.authUser, res is: ", res);
        this.setState({
          userId: res.data._id,
          teamId: res.data.teamId,
          isManager: res.data.isManager
        });
        return res.data;
      })
      .then(response => {
        this.props.onUserLogin(
          response._id,
          response.teamId,
          response.isManager
        );
        // return response;
      })
      // .then(response => {
      //   console.log("In response after authenticated");
      //   response.isManager === true
      //     ? window.redirect("/managerview")
      //     : window.redirect("/employeeview");
      // })
      .catch(err => console.log(err));
  };

  render() {
    return (
		<div className="background">
			<Card id="maincard">
				<Card.Header id="headcard"><h1 id="sitetitle">Dream Shift</h1></Card.Header>
				<Card.Body id="cardbody">
					<form className="form">
						<input
							value={this.state.username}
							name="username"
							onChange={this.handleInputChange}
							type="text"
							placeholder="Enter Your Email"
						/>
						<br />
					
						<input
							value={this.state.password}
							name="password"
							onChange={this.handleInputChange}
							type="password"
							placeholder="Enter Your Password"
						/>
						<br />
						<Button variant="primary" onClick={this.handleFormSubmit}>Log In</Button>
					</form>
				</Card.Body>

			</Card>
		</div>
    );
  }
}

export default LandingPage;
