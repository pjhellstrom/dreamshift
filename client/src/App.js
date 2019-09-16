import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

// import Date from "./components/Date/Date";
// import Day from "./components/Day";

//Employee Pages
import EmpShift from "./components/EmpShift/EmpShift";
import EmpMyShift from "./components/EmpShift/EmpMyShift"
//Manager Pages
import MgrShift from "./components/MgrShift/MgrShift";
import MgrTeam from "./components/MgrShift/MgrTeam";
import MgrAddShift from "./components/MgrShift/MgrAddShift";
import MgrApprove from "./components/MgrShift/MgrApprove";
// import MgrShiftUp from "./components/MgrShift/MgrShiftUp";



function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={LandingPage} />
		{/* <Route exact path="/login" component={LandingPage} /> */}

		{/* Manager pages */}
        <Route exact path="/managerview" component={MgrShift} />
		{/* <Route exact path="/managerview/updateshift" component={MgrShiftUp} /> */}
        <Route exact path="/managerview/team" component={MgrTeam} />
        <Route exact path="/managerview/addshift" component={MgrAddShift} />
        <Route exact path="/managerview/approve" component={MgrApprove} />

		{/* Employee Pages */}
        <Route exact path="/employeeview" component={EmpShift} />
		<Route exact path="/employeeview/EmpMyShift" component={EmpMyShift} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
