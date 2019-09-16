import React, { Component } from "react";
import MgrNav from "./MgrNav";
import API from "../../utils/api";
import MgrApprovalCard from "./MgrApprvoalCard";



class MgrApprove extends Component {
	state= {
		employees:[],
	}

	componentWillMount(){
		console.log("Team Page Mounting")
		API.getEmployees("5d77e45fb112c824efae3718")
		.then(res =>
			{
				console.log(res.data);
				this.setState({ employees: res.data })
			}
			)
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<MgrNav/>
				<div>
					<h1>Approval Requests</h1>

					{this.state.employees.map(
						// console.log(this.state.employees),
						
						(employees, i) => (
							<MgrApprovalCard
								{...employees} // Breaks out employee data for rendering each card
								key={i} // Gives each card a react key i
							/>
						)
					)}

					

				</div>
				{/* <i className="fas fa-user-plus"></i> Add New Team Member (non-func) */}
			</div>
		);
	}
}

export default MgrApprove;