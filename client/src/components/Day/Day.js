import ShiftCard from '../EmpShift/ShiftCard';
import Moment from "react-moment";
import React, { Component } from "react";
// import EmpShift from "../EmpShift/EmpShift";

class Day extends Component {

    render(){
        console.log(this.props);
        return(
        <div>
            <h1><Moment format="MMM-DD-YYYY">{this.props.date}</Moment></h1>
            {this.props.shifts.map((s,i) => (
            <ShiftCard
            {...s} key={i} claimShift={this.props.claimShift}
            //{...claimShift(id)}
            />
        )) }
        {/* {this.getData("5d77e45fb112c824efae3718")} */}
        </div>

        )
    }
}

export default Day;

