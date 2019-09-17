// import "./style.css";
import Day from "../Day/Day"
import React, { Component } from "react";
import EmpNav from "./EmpNav";
import { sortShifts } from "../../utils/helper";
import API from '../../utils/api';

class EmpShift extends Component{
    state = {
        shifts: [],
        userId: "5d7fc54b661e1588acbf04e2",
        pendingShifts: [],
        approvedShifts: []
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
        console.log();
        console.log(id)
     //   console.log(userId);
// claim: function(req, res) {
//     User.updateOne({ _id: req.params.id }, { $push: req.body })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
        // API.updateShift(this.state.userId, {"pendingShifts":__id})
        
        // .then(res =>
		// 	{
        //         console.log(res.data);
        //         console.log(__id);
		// 	})
		// .catch(err => console.log(err));
    }
  render(){
    return(
      <div>
        <EmpNav/>
        <div>
          <h1>Employee Page</h1>
          
        </div>
        {this.state.shifts.map((s,i) => (
        <Day {...s} key={i} claimShift={this.claimShift}/>
        ))}
     
        
      </div>
    );
  }
}

export default EmpShift;
