import React, { Component } from "react";
import MgrNav from "./MgrNav";
import API from "../../utils/api";
import MgrApprovalCard from "./MgrApprvoalCard";



class MgrApprove extends Component {
	state= {
		employees:[],
		teamId: ""
	}

	// componentWillMount(){
	// 	console.log("Approval Page Mounting")
	// 	API.getPending("5d77e45fb112c824efae3718")
	// 	.then(res =>
	// 		{
	// 			console.log(res.data);
	// 			this.setState({ employees: res.data })
	// 		}
	// 		)
	// 	.catch(err => console.log(err));
	// }

	componentWillMount(){
		console.log("Approval Page Mounting")
		this.setState({
			teamId: this.props.teamId
		});
		// API.getEmployees("5d77e45fb112c824efae3718")
		//API.getPending("5d77e45fb112c824efae3718") // Test team ID
		// API.getPending("5d81035a81e5aa8ede795ed1") // pika@chu.ca manager
		API.getPending(this.state.teamId) //Trying to use state team ID
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

							// console.log(employees),

							<MgrApprovalCard
								{...employees} // Breaks out employee data for rendering each card
								key={i} // Gives each card a react key i
							/>
						)


					)}

				</div>
				
			</div>
		);
	}


}

export default MgrApprove;