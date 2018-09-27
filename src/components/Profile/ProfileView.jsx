import React, { Component } from 'react';
import TeamInfo from './TeamInfo';
import UserInfoCard from './UserInfoCard';

class ProfileView extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <TeamInfo />
                    </div>
                    <div className="col-sm-8">
                        <UserInfoCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileView;
