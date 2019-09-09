import React  from 'react';
import Moment from 'react-moment';


// class Date extends React.Component {
//     render() {
//         <Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment>
//     }
// }





 class Date extends React.Component {
    render() {
        return (
            <div><Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment></div>

        )
    }
}
export default Date;
