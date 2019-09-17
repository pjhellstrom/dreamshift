import React, { Component } from "react";
import MgrNav from "./MgrNav";
import ShiftCard from "./ShiftCard";
// import shifts from "../../fakedata/shift.json";
import API from "../../utils/api";

class MgrShift extends Component {
  state = {
    userId: "",
    teamId: "",
    isManager: "",
    teamInfo: []
  };

  componentWillMount() {
    console.log("MgrShift componentWillMount called");
    this.setState({
      userId: this.props.userId,
      teamId: this.props.teamId,
      isManager: this.props.isManager
    });
  }

  componentDidMount() {
    console.log("MgrShift componentDidMount called");
    API.getTeam(this.state.teamId)
      .then(res => {
        console.log(res.data);
        this.setState({ teamInfo: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <MgrNav />
        <div>
          <h1>Manager Page</h1>

          {/* get real data============== */}
          {this.state.teamInfo.map((shifts, i) => (
            <ShiftCard
              {...shifts} // Breaks out shift data for rendering each card
              key={i} // Gives each card a react key i
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MgrShift;
