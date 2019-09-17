import React, { Component } from "react";
import MgrNav from "./MgrNav";
import API from "../../utils/api";
import MgrApprovalCard from "./MgrApprvoalCard";

class MgrApprove extends Component {
  state = {
    teamId: "",
    employees: []
  };

  componentWillMount() {
    console.log("MgrApprove componentWillMount called");
    this.setState({
      teamId: this.props.teamId
    });
  }

  componentDidMount() {
    console.log("Approval Page Mounting");
    // API.getEmployees("5d77e45fb112c824efae3718")
    API.getPending(this.state.teamId)
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
          <h1>Approval Requests</h1>

          {this.state.employees.map(
            // console.log(this.state.employees),

            (employees, i) => (
              // console.log(employees),

              <MgrApprovalCard
                {...employees} // Breaks out employee data for rendering each card
                key={i} // Gives each card a react key i
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default MgrApprove;
