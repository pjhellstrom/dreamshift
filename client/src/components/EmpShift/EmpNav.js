import React from "react";
import { Link } from "react-router-dom";

function EmpNav() {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/employeeview" className={window.location.pathname === "/employeeview" ? "nav-link active" : "nav-link"}>
					<i className="fas fa-home fa-2x"></i>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/employeeview/EmpMyShift"
					className={window.location.pathname === "/employeeview/EmpMyShift" ? "nav-link active" : "nav-link"}
				>
					<i className="fas fa-calendar-check fa-2x"></i>
				</Link>
			</li>



		</ul>
	);
}

export default EmpNav;
