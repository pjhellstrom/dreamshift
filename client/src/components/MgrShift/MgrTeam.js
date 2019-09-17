import React, { Component } from "react";
import MgrNav from "./MgrNav";
import MgrEmpCard from "./MgrEmpCard";
import API from "../../utils/api";
import MgrAddEmp from "./MgrAddEmp";

class MgrTeam extends Component {
  state = {
    teamId: "",
    employees: []
  };

  componentWillMount() {
    this.setState({
      teamId: this.props.teamId
    });
  }

  componentDidMount() {
    console.log("Team Page Mounting");
    API.getEmployees(this.state.teamId)
      .then(res => {
        console.log(res.data);
        this.setState({ employees: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <MgrNav />
        <div>
          <h1>Manage Team</h1>

          {this.state.employees.map((employees, i) => (
            <MgrEmpCard
              {...employees} // Breaks out shifts data for rendering each card
              key={i} // Gives each card a react key i
            />
          ))}

          <MgrAddEmp
            teamId={this.state.teamId}
            isManager={this.state.isManager}
          />
        </div>
        {/* <i className="fas fa-user-plus"></i> Add New Team Member (non-func) */}
      </div>
    );
  }
}

export default MgrTeam;
