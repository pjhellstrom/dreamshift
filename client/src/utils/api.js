import axios from "axios";

export default {

  // getManager: function() {
  //   return axios.get("/api/shifts/5d77e45fb112c824efae3718");
  // }
	getTeam: function(id) {
		console.log(id);
		return axios.get("/api/shifts/"+id);
	},

	getEmployees: function(id) {
		// console.log(id);
		return axios.get("/api/user/manager/all/"+id);
	},

	addEmployee: function(newEmp) {
		// console.log(newEmp);
		return axios.post("/api/user/manager/addemployee", newEmp);
	},

	addShift: function(newShift) {
		// console.log(newShift);
		return axios.post("/api/shifts/manager/addshift", newShift);
	},

	deleShift: function(id) {
		// console.log(id);
		return axios.delete("/api/shifts/manager/deleteshift/"+id);
	}

};
