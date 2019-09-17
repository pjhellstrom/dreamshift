// import "./style.css";
import Day from "../Day/Day";
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import { sortShifts } from "../../utils/helper";
import API from "../../utils/api";


class EmpShift extends Component{
    state = {
        shifts: [],
        userId: "5d7fd3766e00d10cec6bcc82",
        pendingShifts: [],
        approvedShifts: []
    }

//   state = {
//     shifts: [],
//     teamId: "",
//     userId: "",
//     pendingShifts: [],
//     approvedShifts: []
//   };


//   componentWillMount() {
//     this.setState({
//       teamId: this.props.teamId,
//       userId: this.props.userId
//     });
//   }


    claimShift = (num,id) =>{
        console.log(num,id, "shifts",this.state.shifts,this.state.shifts[num].shifts[id]._id);
        const pending = {"pendingShifts": this.state.shifts[num].shifts[id]._id};
        API.updateShift(this.state.userId, pending)
        .then(res =>
          {
            console.log(res.data);
          //  console.log(__id);
          })
        .catch(err => console.log(err));
        }
  componentDidMount() {
    API.getTeam(this.state.teamId)
      .then(res => {
        console.log(res.data);
        let sortedData = sortShifts(res.data);
        console.log(sortedData);
        this.setState({ shifts: sortedData }, () =>
          console.log("a value is " + this.state.shifts)
        );
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <EmpNav />
        <div>
          <h1>Employee Page</h1>
        </div>
        {this.state.shifts.map((s,index) => (
        <Day {...s} keys={index} addShift={this.claimShift}/>

        ))}
      </div>
    );
  }
}

export default EmpShift;
