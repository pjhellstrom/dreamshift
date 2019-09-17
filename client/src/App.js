import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import { Redirect } from "react-router-dom";

// import Date from "./components/Date/Date";
// import Day from "./components/Day";

//Employee Pages
import EmpShift from "./components/EmpShift/EmpShift";
import EmpMyShift from "./components/EmpShift/EmpMyShift";
//Manager Pages
import MgrShift from "./components/MgrShift/MgrShift";
import MgrTeam from "./components/MgrShift/MgrTeam";
import MgrAddShift from "./components/MgrShift/MgrAddShift";
import MgrApprove from "./components/MgrShift/MgrApprove";
// import MgrShiftUp from "./components/MgrShift/MgrShiftUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      teamId: "",
      isManager: ""
    };
  }

  onUserLogin = (activeUserId, activeTeamId, activeIsManager) => {
    console.log(
      "In onUserLogin, setting global state of these: ",
      activeUserId,
      activeTeamId,
      activeIsManager
    );
    this.setState({
      userId: activeUserId,
      teamId: activeTeamId,
      isManager: activeIsManager
    });
    console.log("Updated global state:", this.state);
    // if (this.state.isManager === true) {
    //   this.props.history.push("/managerview");
    // } else {
    //   this.props.history.push("/employeeview");
    // }
  };

  render() { // Redirect user on login
	let redirect = null;
	if (this.state.isManager === true) {
		redirect = <Redirect to = "/managerview" />
	}
	else if (this.state.isManager === false){
		redirect = <Redirect to = "/employeeview" />
	}

    return (
      <Router>
        <div>
		  {redirect}
          <Route
            exact
            path="/"
            component={() => <LandingPage onUserLogin={this.onUserLogin} />}
          />
          <Route
            exact
            path={"/managerview"}
            component={() => (
              <MgrShift
                teamId={this.state.teamId}
                isManager={this.state.isManager}
              />
            )}
          />
          <Route
            exact
            path={"/managerview/team"}
            component={() => (
              <MgrTeam
                teamId={this.state.teamId}
                isManager={this.state.isManager}
              />
            )}
          />

          <Route
            exact
            path={"/managerview/addshift"}
            component={() => (
              <MgrAddShift
                teamId={this.state.teamId}
                isManager={this.state.isManager}
              />
            )}
          />

          <Route
            exact
            path={"/managerview/approve"}
            component={() => (
              <MgrApprove
                teamId={this.state.teamId}
                isManager={this.state.isManager}
              />
            )}
          />

          <Route
            exact
            path={"/employeeview"}
            component={() => (
              <EmpShift
                userId={this.state.userId}
                teamId={this.state.teamId}
                isManager={this.state.isManager}
              />
            )}
          />

          <Route
            exact
            path={"/employeeview/EmpMyShift"}
            component={() => (
              <EmpMyShift
                userId={this.state.userId}
                teamId={this.state.teamId}
                isManager={this.state.isManager}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
