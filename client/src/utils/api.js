import axios from "axios";

export default {
  getManager: function() {
    return axios.get("/api/shifts/manager");
  }
};
