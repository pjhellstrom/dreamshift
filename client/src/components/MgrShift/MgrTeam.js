import React, { Component } from "react";
import MgrNav from "./MgrNav";
import MgrEmpCard from "./MgrEmpCard";
import users from "../../fakedata/users.json";
import API from "../../utils/api";


class MgrTeam extends Component {
	state= {
		employees:[],
	}

	

	componentWillMount(){
		console.log("Team Page Mounting")
		API.getEmployees("5d77e45fb112c824efae3718")
		.then(res =>
			{
				console.log("A response in the .then")
				console.log(res.data);
				this.setState({ employees: res.data }, () => console.log("a value is "+ this.state.employees));
			}
			)
		.catch(err => console.log(err));
	}

	deleEmp = (id) =>{
		console.log(id)

		// have pseudo id of emp, make call to remove 
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