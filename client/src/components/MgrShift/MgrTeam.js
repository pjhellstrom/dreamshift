import React, { Component } from "react";
import MgrNav from "./MgrNav";
import MgrEmpCard from "./MgrEmpCard";
import users from "../../fakedata/users.json";


class MgrTeam extends Component {

	deleEmp = (id) =>{
		console.log(id)

		// if(this.state.chosen.includes(id))


	}

	render() {
		return (
			<div>
				<MgrNav/>
				<div>
					<h1>Manage Team</h1>

					{/* mapping through dummy data change to real data in production */}
					{users.map(
						(users, i) => (
						
							<MgrEmpCard
								{...users} // Breaks out shifts data for rendering each card
								key={i} // Gives each card a react key i
								deleEmp={this.deleEmp}
							/>
							
						)
					)}
				</div>
				<i className="fas fa-user-plus"></i> Add New Team Member (non-func)
			</div>
		);
	}
}

export default MgrTeam;







// Add user FA icon <i class="fas fa-user-plus"></i>