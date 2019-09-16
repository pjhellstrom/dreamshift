import React from "react";
import { Link } from "react-router-dom";

function MgrNav() {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/managerview" className={window.location.pathname === "/managerview" ? "nav-link active" : "nav-link"}>
					<i className="fas fa-home fa-2x"></i>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/managerview/team"
					className={window.location.pathname === "/managerview/team" ? "nav-link active" : "nav-link"}
				>
					<i className="fas fa-users-cog fa-2x"></i>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/managerview/addshift"
					className={window.location.pathname === "/managerview/addshift" ? "nav-link active" : "nav-link"}
				>
					<i className="fas fa-calendar-plus fa-2x"></i>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/managerview"
					className={window.location.pathname === "/managerview/manageshift" ? "nav-link active" : "nav-link"}
				>
					<i className="fas fa-calendar-check fa-2x"></i>
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/logout"
					className={window.location.pathname === "/api/auth/logout" ? "nav-link active" : "nav-link"}
				>
					  {/* // "/api/auth/logout" */}
					<i className="fas fa-door-open fa-2x"></i>
				</Link>
			</li>

		</ul>
	);
}

export default MgrNav;
