import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API from "../../utils/api";

class MgrAddEmp extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    password: "",
    lastName: "",
    location: "",
    phoneNumber: "",
    username: "",
    teamId: "",
    isManager: false,
    showAddEmp: false
  };

  componentWillMount() {
    this.setState({
      teamId: this.props.teamId
    });
  }

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
    console.log(this.state);
    const newEmp = {
      firstName: this.state.firstName,
      password: this.state.password,
      lastName: this.state.lastName,
      location: this.state.location,
      phoneNumber: this.state.phoneNumber,
      username: this.state.username,
      teamId: this.state.teamId,
      isManager: this.state.isManager
    };
    console.log(newEmp);
    API.addEmployee(newEmp)
      .then(res => {
        // console.log(res.data); = This gives back garbage data right now
        console.log("user created");
      })
      .catch(err => console.log(err));

    // tried a few things to get form to clear, no luck, moving on
    // had date setting to blank, but only location reflected change
    // New User only shows on page after refresh, not immediately
  };

  showForm = () => {
    this.setState({ showAddEmp: this.state.showAddEmp ? false : true });
  };

  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            <Button onClick={() => this.showForm()}>
              <i className="fas fa-user-plus fa-2x"></i> Add Team Member
            </Button>
          </Card.Header>

          <Card.Body style={{ display: this.state.showAddEmp ? "" : "none" }}>
            <form className="form">
              <input
                value={this.state.name}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
              />
              <br />

              <input
                value={this.state.name}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
              />
              <br />

              <input
                value={this.state.location}
                name="location"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Home Location"
              />
              <br />

              <input
                value={this.state.description}
                name="phoneNumber"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Phone Number"
              />
              <br />

              <input
                value={this.state.description}
                name="username"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email"
              />
              <br />

              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="New User Password"
              />
              <br />

              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MgrAddEmp;
