// import "./style.css";
import Day from "../Day/Day"
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import { sortShifts } from "../../utils/helper";
import API from '../../utils/api';

class EmpMyShift extends Component{
    state = {
      approvedShifts: [],
      pendingShifts: [],

    }

    componentWillMount(){
        API.getEmpShift("EmpId")
        .then(res =>
    {
    console.log(res.data);
    let sortedData = sortShifts(res.data);
    console.log(sortedData);
    this.setState({ approvedShifts: sortedData }, () => console.log("a value is "+ this.state.myShifts));
    }
    )
.catch(err => console.log(err));

}
    claimShift = (id) =>{
        console.log(id)
    }
  render(){
    return(
      <div>
        <EmpNav/>
        <div>
          <h1>Employee Page</h1>

        </div>
        {this.state.shifts.map((s,i) => (
        <Day {...s} key={i}/>
        ))}


      </div>
    );
  }
}

export default EmpMyShift;

