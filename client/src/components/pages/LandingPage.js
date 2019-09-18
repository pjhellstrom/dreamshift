import React, { Component } from "react";
import { Link } from "react-router-dom";
// import api from "../utils/api";
import Button from "react-bootstrap/Button";
import API from "../../utils/api";

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
      <div>
        <div>
          <h1>Dream Shift</h1>
        </div>
        <form className="form">
        <br />
          User
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter Your Email"
          />
          <br />
          Password
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Enter Your Password"
          />
          <br />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <br />
        {/* <button className="btn btn-primary">
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
        </button> */}
      </div>
    );
  }
}

export default LandingPage;
