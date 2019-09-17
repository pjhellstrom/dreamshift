// import "./style.css";
import Day from "../Day/Day"
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import { sortShifts } from "../../utils/helper";
import API from '../../utils/api';
// import shifts from "../../fakedata/shift.json";

class EmpMyShift extends Component{
    state = {
      approvedShifts: [],
      pendingShifts: [],

    }

    componentWillMount(){
        // API.getEmpShift("5d7fc54b661e1588acbf04e2")

        API.getEmpShift("5d7fd5cb455afd3e76369cdc")
        .then(res =>
    {
    // console.log(res.data);
    // let sortedData = sortShifts(res.data);
    let shiftData = sortShifts(res.data.shifts);
    // let pendingData = sortShifts(res.data.pendingShifts);
    this.setState({ approvedShifts: shiftData }, () => console.log("a value of shift is "+ this.state.approvedShifts));
    }
    )
    .catch(err => console.log(err));
// ================pendingShifts=======================
    API.getEmpShiftPending("5d7fd5cb455afd3e76369cdc")
    .then(res =>
    {

    // let pendingData = res.data.pendingShifts;
    console.log("all res" + res);
    let pendingData = sortShifts(res.data.pendingShifts);
    console.log(pendingData);
    this.setState({ pendingShifts: pendingData }, () => console.log("a value of pending is "+ this.state.pendingShifts));
    }
    )
    .catch(err => console.log(err));


}

  render(){
    return(
      <div>
        <EmpNav/>
        <div>
          <h1>My Shifts</h1>


        {this.state.approvedShifts.map((s,i) => (
        <Day {...s} key={i}/>
        ))}
        </div>
        <div>
          <h1>My Pending Shifts</h1>


        {this.state.pendingShifts.map((s,i) => (
        <Day {...s} key={i}/>
        ))}
        </div>
      </div>
    );
  }
}

export default EmpMyShift;

