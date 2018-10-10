import React, { Component } from 'react';
import TeamInfo from './TeamInfo';
import UserInfoCard from './UserInfoCard';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

class ProfileView extends Component {
    render() {
        return (
            <GridContainer>
                <GridItem  xs={1} sm={1} md={1}></GridItem>
                <GridItem  xs={10} sm={10} md={10}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <TeamInfo />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            <UserInfoCard />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem  xs={1} sm={1} md={1}></GridItem>
            </GridContainer>
        );
    }
}

export default ProfileView;
