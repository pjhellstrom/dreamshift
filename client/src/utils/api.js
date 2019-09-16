import axios from "axios";

export default {

//get all shifts for one team by teamId
  getTeam: function(id) {
    return axios.get("/api/shifts/"+id);
  },
//Update one shift by shiftId
  // UpdateTeamShift: function(id)
  // return axios.

};
