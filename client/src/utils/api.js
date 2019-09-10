import axios from "axios";

export default {
  getEmployee: function() {
    return axios.get("/employee");
  },
  getEmployeeById: function() {
    return axios.get("/employee/shift/:id");
  },
  getManager: function() {
    return axios.get("/manager");
  }
};
