import ShiftCard from '../EmpShift/ShiftCard';
// import Moment from "react-moment"
import React, { Component } from "react";

class Day extends Component {

    render(){
        return(
        <div>
            <h1>{this.props.date}</h1>
            {this.props.shifts.map((s,i) => (
            <ShiftCard
            {...s} key={i}
            />
        )) }
        {/* {this.getData("5d77e45fb112c824efae3718")} */}
        </div>

        )
    }
}

export default Day;

