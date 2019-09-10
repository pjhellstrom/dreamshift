import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import LandingPage from "./components/pages/LandingPage";

// import Date from "./components/Date/Date";
// import Day from "./components/Day";
// import Employee from "./components/EmpShift/EmpShift";

import MgrShift from "./components/MgrShift/MgrShift";
import MgrTeam from "./components/MgrShift/MgrTeam";
import MgrAddShift from "./components/MgrShift/MgrAddShift";

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/managerview" component={MgrShift} />
        <Route exact path="/managerview/team" component={MgrTeam} />
        <Route exact path="/managerview/addshift" component={MgrAddShift} />
        <Route exact path="/managerview/manageshift" component={MgrShift} />

        {/* <Route exact path="/employeeview" component={EmpShift} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
