import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import LandingPage from "./components/pages/LandingPage";

// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";
// import Date from "./components/Date/Date";
// import Day from "./components/Day";
// import Employee from "./components/EmpShift/EmpShift";

// import EmpShift from "./components/EmpShift/EmpShift";
import MgrShift from "./components/MgrShift/MgrShift";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/managerview" component={MgrShift} />
        <Route exact path="/managerview/team" component={MgrShift} />
        <Route exact path="/managerview/addshift" component={MgrShift} />
        <Route exact path="/managerview/manageshift" component={MgrShift} />

        {/* <Route exact path="/employeeview" component={EmpShift} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
