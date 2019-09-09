import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Landing Page</h1>
          <p>This will need to be replaced with a proper login page</p>
        </div>
        <button className="btn btn-primary">
          <Link
            to="/managerview"
            className={window.location.pathname === "/managerview"}
            style={{ color: "white" }}
          >
            Login As Manager
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link
            to="/employeeview"
            className={window.location.pathname === "/employeeview"}
            style={{ color: "white" }}
          >
            Login As Employee
          </Link>
        </button>
      </div>
    );
  }
}

export default LandingPage;
