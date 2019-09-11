
// day container which populates all shifts within day
// date component listed in desceding order

import React  from 'react';
import Moment from 'react-moment';
import ShiftCard from '../EmpShift/ShiftCard';
// import Date from "./Date";
// import EmpShift from "./EmpShift";
import shifts from "../../fakedata/shift.json";


function Day (props) {
    return (
        <div>
            <h1>DAY</h1>
            <div>{props.children}</div>
            {this.shifts.map(shift => (
            <ShiftCard
            // Shift={shift.id}
            />
        )) }
        </div>
    )
}



export default Day;

