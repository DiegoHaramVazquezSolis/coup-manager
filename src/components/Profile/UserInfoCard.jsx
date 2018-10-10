import React, { Component } from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import UserProfile from './UserProfile';

class UserInfoCard extends Component {
    render() {
        return (
            <Card>
                <CardHeader color="primary">
                    Tu informacion
                </CardHeader>
                <CardBody>
                    <UserProfile />
                </CardBody>
            </Card>
        );
    }
}

export default UserInfoCard;
