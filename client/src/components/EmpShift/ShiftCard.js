import React  from 'react';
import Moment from 'react-moment';
// import Date from "./Date";
// import EmpShift from "./EmpShift";

function ShiftCard (props) {
    return (
        <div>
            <h1>SHIFT</h1>
            <div>{props.children}</div>
            
        </div>
    )
}



export default ShiftCard;