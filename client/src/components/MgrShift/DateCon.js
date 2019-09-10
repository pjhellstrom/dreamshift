import React  from 'react';
import Moment from 'react-moment';
 
export default class DateCon extends React.Component {
    render() {
        return (
            <Moment parse="MM-DD-YYYY">
                1976-04-19 12:59
            </Moment>
        );
    }
}