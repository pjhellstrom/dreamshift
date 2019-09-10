import React, { Component } from "react";
import EmpNav from "./EmpNav";
import ShiftCard from "./EmpShiftCard";
import shifts from "../../fakedata/shift.json";

class EmpShift extends Component{
  render(){
    return(
      <div>
        <EmpNav/>
        <div>
          <h1>Employee Page</h1>
          {shifts.map((shifts,i) => (<ShiftCard {...shifts} key={i}/>)
            )}

        </div>
      </div>
    );
  }
}




export default EmpShift;




