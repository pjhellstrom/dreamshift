
// day container which populates all shifts within day
// date component listed in desceding order

import React  from 'react';
// import Moment from 'react-moment';
import ShiftCard from '../EmpShift/ShiftCard';
import api from '../../utils/api';
import Axios from "axios";
// import Date from "./Date";
// import EmpShift from "./EmpShift";
// import shifts from "../../fakedata/shift.json";

// make a call for all employee Data, pass as prop through day Container
// in day container, pass the props on to the shift card
class Day extends Component {
    render(){
        state = {
            shift: []
        }

        componentWillMount = () => {
            API.getmanager()
            .then(res => this.state.shift)
            .catch(res => console.log(err))
        }
        <div>
            <h1>DAY</h1>
            <div>{props.children}</div>
            {this.state.shifts.map((shift,i) => (
            <ShiftCard
            {...shift} key={i}
            />
        )) }
        </div>
    
    }
        
}


export default Day;

