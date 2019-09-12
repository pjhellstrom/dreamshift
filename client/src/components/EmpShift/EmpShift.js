// import "./style.css";
// import Day from "../Day/Day"
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import ShiftCard from "./EmpShiftCard";
import shifts from "../../fakedata/shift.json";
// import Axios from "axios";
// import { STATES } from "mongoose";

// componentWillMount = () => {
//     Axios -> state.shift;
// };

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

// class EmpShift extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>employee view</h1>
//                 <Day>
//                     sept 6
//                 </Day>
//             </div>

//         )
//     }
// }
// export default EmpShift;