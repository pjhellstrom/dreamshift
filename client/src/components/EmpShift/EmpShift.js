// import "./style.css";
 import Day from "../Day/Day"
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import { sortShifts } from "../../utils/helper";
import API from '../../utils/api';

class EmpShift extends Component{
    state = {
        shifts: []
    }

    componentWillMount(){
        API.getTeam("5d77e45fb112c824efae3718")
        .then(res =>
    {
    console.log(res.data);
    let sortedData = sortShifts(res.data);
    console.log(sortedData);
    this.setState({ shifts: sortedData }, () => console.log("a value is "+ this.state.shifts));
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