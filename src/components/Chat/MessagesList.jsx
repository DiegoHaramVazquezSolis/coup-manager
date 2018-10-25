import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StayScrolled from 'react-stay-scrolled';
import CardBody from '../Card/CardBody';
import SelfChateMessage from './SelfChatMessage';
import OtherChatMessage from './OtherChatMessage';
class MessagesList extends Component {
    componentDidUpdate(prevProps) {
        this.stayScrolled();
    }

    storeScrolledControllers = ({ stayScrolled, scrollBottom }) => {
        this.stayScrolled = stayScrolled;
        this.scrollBottom = scrollBottom;
    }
    
    render() {
        console.log(Object.keys(this.props.messages).length <= 0);
        return (
            <StayScrolled provideControllers={this.storeScrolledControllers} style={{height: "500px", overflowY: "scroll"}}>
                <CardBody>
                    {this.props.messages instanceof Object && Object.keys(this.props.messages).map((message, index) => {
                        if(this.props.messages[message].sender === this.props.uid){
                            return (
                                <SelfChateMessage
                                key={index}
                                {...this.props.members[this.props.messages[message].sender]}
                                message={this.props.messages[message].message}
                                timeStamp={this.props.messages[message].timeStamp} />
                            );
                        }else {
                            return (
                                <OtherChatMessage
                                key={index}
                                {...this.props.members[this.props.messages[message].sender]}
                                message={this.props.messages[message].message}
                                timeStamp={this.props.messages[message].timeStamp} />
                            );
                        }
                    })}
                </CardBody>
            </StayScrolled>
        );
    }
}
MessagesList.propTypes = {
    messages: PropTypes.object.isRequired,
    uid: PropTypes.string.isRequired,
    members: PropTypes.object.isRequired
};

export default MessagesList;
