import axios from "axios";

export default {

  // getManager: function() {
  //   return axios.get("/api/shifts/5d77e45fb112c824efae3718");
  // }
  getTeam: function(id) {
    return axios.get("/api/shifts/"+id);
  }
};
