import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import { getChatMessages } from '../../redux/actions/chatActions';
import { getTeamMembers } from '../../redux/actions/teamMembersActions';
import Header from '../Header';
import MessagesList from './MessagesList';
import CreateMessageForm from './CreateMessageForm';

class ChatRoom extends Component {
    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(!prevState.loaded && nextProps.teamName !== undefined){
            nextProps.getChatMessages(nextProps.teamName);
            nextProps.getTeamMembers(nextProps.teamName);
            return {loaded: true}
        }
        return null
    }

    render() {
        return (
            <GridContainer>
                <Header title="Chatea con tu equipo" />
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            Chat equipo {this.props.teamName}
                        </CardHeader>
                        {this.props.fetched &&
                            <MessagesList
                                uid={this.props.uid}
                                members={this.props.members}
                                messages={this.props.chat.chat} />
                        }
                        <CreateMessageForm
                            teamName={this.props.teamName}
                            sender={this.props.uid} />
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

function mapStateToProps(state) {
    return {
        teamName: state.userTeam.team.name,
        teamLogo: state.userTeam.team.logo,
        chat: state.chat.chat,
        uid: state.user.profile.uid,
        members: state.members.teamMembers,
        fetched: Object.keys(state.members.teamMembers).length > 0
    }
}

export default ChatRoom = connect(mapStateToProps,{mapDispatchToProps, getChatMessages, getTeamMembers})(ChatRoom);
