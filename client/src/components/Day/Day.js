
// day container which populates all shifts within day
// date component listed in desceding order

//import React  from 'react';
// import Moment from 'react-moment';
import ShiftCard from '../EmpShift/ShiftCard';
import API from '../../utils/api';
import React, { Component } from "react";
// import Date from "./Date";
// import EmpShift from "./EmpShift";
// import shifts from "../../fakedata/shift.json";

// make a call for all employee Data, pass as prop through day Container
// in day container, pass the props on to the shift card
class Day extends Component {
    // getData = (id) =>{
    //     console.log("getdata called");
    //     API.getTeam(id)
    //     .then(res => {
    //         console.log("getdata.then reached")
    //         console.log(res)
    //     })
    //     .catch(err => console.log(err));
    //     console.log("inside function ");
    // }
    state = {
        shifts: []
    }

    componentWillMount(){
        API.getTeam("5d77e45fb112c824efae3718")
        .then(res =>
    {
    console.log(res.data);
    this.setState({ shifts: res.data }, () => console.log("a value is "+ this.state.shifts));
    }
    )
.catch(err => console.log(err));


}
    render(){
        return(



    
        <div>
            <h1>DAY</h1>
            <h1>Hey there</h1>
            {this.state.shifts.map((s,i) => (
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

