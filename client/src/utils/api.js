import axios from "axios";
import { PromiseProvider } from "mongoose";

export default {
  authUser: function(activeUser) {
    console.log(
      "authUser front-end API endpoint with user:",
      activeUser.username
    );
    return axios.post("/api/auth/login", activeUser);
  },
  // getManager: function() {
  //   return axios.get("/api/shifts/5d77e45fb112c824efae3718");
  // }
  getTeam: function(id) {
    console.log(id);
    return axios.get("/api/shifts/" + id);
  },

  // Manager API Calls for Employees
  getEmployees: function(id) {
    // console.log(id);
    return axios.get("/api/user/manager/all/" + id);
  },

  getPending: function(id) {
    // console.log(id);
    return axios.get("/api/user/manager/allPending/" + id);
  },

  // /manager/allPending/:id

  addEmployee: function(newEmp) {
    // console.log(newEmp);
    // return axios.post("/api/user/manager/addemployee", newEmp);
    return axios.post("/api/auth/register", newEmp);
  },

  deleEmployee: function(id) {
    // console.log(id);
    return axios.delete("/api/user/manager/deleteuser/" + id);
  },

  // Manager API Calls for Shifts
  addShift: function(newShift) {
    // console.log(newShift);
    return axios.post("/api/shifts/manager/addshift", newShift);
  },

  deleShift: function(id) {
    // console.log(id);
    return axios.delete("/api/shifts/manager/deleteshift/" + id);
  },

  fillShift: function(id) {
    console.log("In fillShift FE router with id: ", id);
    return axios.put("/api/shifts/manager/fillShift/" + id);
  },

  updateShift: function(id, req) {
    return axios.put("/api/user/employee/claimShift/" + id, req);
  },

  //Employee API Calls for shifts
  getEmpShift: function(id) {
    return axios.get("/api/user/employee/shifts/" + id);
  },

  //Employee API Calls for pending shifts
  getEmpShiftPending: function(id) {
    return axios.get("/api/user/employee/pendingShifts/" + id);
  },

  approveShift: function(userId, shiftId) {
    console.log(
      "In approveShift FE router with userId: ",
      userId,
      " shiftId: ",
      shiftId
    );
    return axios.put("/api/user/employee/approveShift/" + userId, shiftId);
  },

  declineShift: function(userId, shiftId) {
    console.log(
      "In approveShift FE router with userId: ",
      userId,
      " shiftId: ",
      shiftId
    );
    return axios.put("/api/user/employee/declineShift/" + userId, shiftId);
  },

  pushShift: function(userId, shiftId) {
    return axios.put("/api/user/employee/approveShiftPush/" + userId, shiftId);
  }
};
