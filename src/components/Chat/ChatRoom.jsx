import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import { getChatMessages } from '../../redux/actions/chatActions';
import CardBody from '../Card/CardBody';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../CustomButtons/Button';
import { chatsRef } from '../../services/DatabaseService';
import StayScrolled from 'react-stay-scrolled';
import Avatar from '@material-ui/core/Avatar';
import { getTeamMembers } from '../../redux/actions/teamMembersActions';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ChatRoom extends Component {
    state = {
        loaded: false,
        currentMessage: ""
    };

    componentDidUpdate(prevProps) {
        if(prevProps.chat.chat.length < this.props.chat.chat.length)
            this.stayScrolled(); // Or: this.scrollBottom
    }

    storeScrolledControllers = ({ stayScrolled, scrollBottom }) => {
        this.stayScrolled = stayScrolled;
        this.scrollBottom = scrollBottom;
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(!prevState.loaded && nextProps.teamName !== undefined){
            nextProps.getChatMessages(nextProps.teamName);
            nextProps.getTeamMembers(nextProps.teamName);
            return {loaded: true}
        }
        return null
    }

    onSubmit = (e) => {
        e.preventDefault();
        chatsRef.child(this.props.teamName.replace(' ','').toUpperCase()).push({
            message: this.state.currentMessage,
            sender: this.props.uid
        });
        this.setState({ currentMessage: "" });
    }

    render() {
        console.log(this.props.members);
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            Chat equipo {this.props.teamName}
                        </CardHeader>
                        <StayScrolled provideControllers={this.storeScrolledControllers} Component="div" style={{height: "500px", overflowY: "scroll"}}>
                            <CardBody>
                                {this.props.chat.chat instanceof Array && this.props.chat.chat.map((message) => {
                                    if(message.sender === this.props.uid){
                                        return (
                                            <GridContainer>
                                                <GridItem xs={0} sm={2} md={6}></GridItem>
                                                <GridItem xs={12} sm={10} md={6}>
                                                    <Card>
                                                        <CardHeader color="info">
                                                            <ListItem>
                                                                <Avatar src={this.props.members[message.sender].foto} alt="" />
                                                                <ListItemText
                                                                    primary={this.props.members[message.sender].name}
                                                                    secondary={this.props.members[message.sender].position || ""} />
                                                            </ListItem>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <p>{message.message}</p>
                                                        </CardBody>
                                                    </Card>
                                                </GridItem>
                                            </GridContainer>
                                        );
                                    }else {
                                        return (
                                            <GridContainer>
                                                <GridItem xs={12} sm={10} md={6}>
                                                    <Card>
                                                        <CardHeader color="primary">
                                                            <ListItem>
                                                                <Avatar src={this.props.members[message.sender].foto} alt="" />
                                                                <ListItemText
                                                                    primary={this.props.members[message.sender].name}
                                                                    secondary={this.props.members[message.sender].position || ""} />
                                                            </ListItem>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <p>{message.message}</p>
                                                        </CardBody>
                                                    </Card>
                                                </GridItem>
                                            </GridContainer>
                                        );
                                    }
                                })}
                            </CardBody>
                        </StayScrolled>
                        <GridContainer>
                            <GridItem xs={1} sm={1} md={1}></GridItem>
                            <GridItem xs={10} sm={10} md={10}>
                                <form onSubmit={this.onSubmit}>
                                    <CustomInput
                                        value={this.state.currentMessage}
                                        onChange={(e) => this.setState({ currentMessage: e.target.value })}
                                        id="currentMessage"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        labelText="Mensaje para el equipo"
                                        required={true}
                                    />
                                    <Button type="submit">
                                        Enviar
                                    </Button>
                                </form>
                            </GridItem>
                        </GridContainer>
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
        members: state.members.teamMembers
    }
}

export default ChatRoom = connect(mapStateToProps,{mapDispatchToProps, getChatMessages, getTeamMembers})(ChatRoom);
