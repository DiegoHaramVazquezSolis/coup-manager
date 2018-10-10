import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import NavItem from './NavItem';
import { notificationsRef } from '../../services/DatabaseService';
import Notifications from '../Notification/Notification';
import NotificationModal from '../Modal/NotificationModal';
import {INICIO} from './../Const/PathName';
import { logOut } from '../../redux/actions/userActions';
import NavLinkItem from './NavLinkItem';
import NotificationIcon from '@material-ui/icons/Notifications';
import { getResult } from '../../redux/actions/resultActions';
import { getStatistic } from '../../redux/actions/statisticActions';
import { getAllTeams } from '../../redux/actions/teamsActions';

class NavBarAuthenticatedUser extends Component {
    state = {
        notifications: {},
        loaded: false,
        loadNotifications: false
    };

    close = (e) => {
        e.preventDefault();
        this.props.logOut();
        this.props.push(INICIO);
    }

    render() {
        if(!this.state.loaded){
            /*this.props.getResult("iionvoidsnvoidnsiov");
            this.props.getStatistic("UHS4BLNsZsQjWaaRQzYMcDIWf6s1","Jornada1");
            this.props.getAllTeams();*/
            notificationsRef.child(this.props.uid).on('value', (notifications) => {
                this.setState({ notifications: notifications.val(), loaded: true });
            });
        }
        return (
            <ul className="navbar-nav">
                <NavItem className="nav-item dropdown">
                    <button onClick={() => this.setState({ loadNotifications: true })} className="btn btn-dark dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <NotificationIcon /><span className="badge badge-light">{(this.state.notifications instanceof Object && Object.keys(this.state.notifications).length) || 0}</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {this.state.notifications instanceof Object && Object.keys(this.state.notifications).map((notification, index) => (
                        <Notifications key={index} type={this.state.notifications[notification].type} name={this.state.notifications[notification].name} sender={this.state.notifications[notification].sender} />
                    ))}
                    </div>
                </NavItem>
                {this.state.loadNotifications && this.state.notifications instanceof Object && Object.keys(this.state.notifications).map((notification) => (
                    <NotificationModal notification={this.state.notifications[notification]} />
                ))}
                <NavLinkItem to={INICIO} active={this.props.active} title="Cerrar sesion" onLinkClicked={this.close} onClick={this.props.changeActive} />
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default NavBarAuthenticatedUser = connect(null,{mapDispatchToProps, logOut, getAllTeams, getResult, getStatistic})(NavBarAuthenticatedUser);
