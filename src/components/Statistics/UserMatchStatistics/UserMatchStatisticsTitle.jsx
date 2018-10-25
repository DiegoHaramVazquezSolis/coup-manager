import React, { Component } from 'react';

class UserMatchStatisticsTitle extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h3>{this.props.title}</h3>
                <br/>
            </div>
        );
    }
}

export default UserMatchStatisticsTitle;
