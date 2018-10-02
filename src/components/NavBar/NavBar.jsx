import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './../../logo.svg';
import "./../../styles/NavBar.css";
import { logOut } from '../../services/AuthService';
import { withRouter,Link } from 'react-router-dom';
import { notificationsRef } from '../../services/DatabaseService';
import Notification from '../Notification/Notification';
import NotificationModal from '../Modal/NotificationModal';
import NavItem from './NavItem';
import {INICIO, PERFIL, REGISTRO, LISTA} from './../Const/PathName';

class NavBar extends Component {
    state = {
        notifications: {},
        userLoaded: false,
        loadNotifications: false,
        active: INICIO
    };

    close = (e) => {
        e.preventDefault();
        logOut();
        this.props.history.push('/');
    }

    componentWillMount() {
        this.setState({ active: this.props.location.pathname });
    }

    changeActive = (newPathName) => {
        this.setState({ active: newPathName });
    }

    render() {
        if(this.props.uid != null && !this.state.userLoaded) {
            notificationsRef.child(this.props.uid).on('value', (notifications) => {
                this.setState({ notifications: notifications.val(), userLoaded: true });
            });
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Master coup <img className="App-logo" src={logo} alt="Logotipo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.props.userName == null &&
                            <NavItem to={REGISTRO} active={this.state.active} title="Registro" onClick={this.changeActive} />
                        }
                        {this.props.uid != null &&
                        <li className="nav-item dropdown">
                            <button onClick={() => this.setState({ loadNotifications: true })} className="btn btn-dark dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Notificaciones <span className="badge badge-light">{Object.keys(this.state.notifications).length}</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {Object.keys(this.state.notifications).map((notification, index) => (
                                <div key={index}>
                                    <Notification type={this.state.notifications[notification].type} name={this.state.notifications[notification].name} sender={this.state.notifications[notification].sender} />
                                </div>
                            ))}
                            </div>
                        </li>
                        }
                        {this.props.uid != null && this.state.loadNotifications &&
                            <div>
                                {Object.keys(this.state.notifications).map((notification) => (
                                    <NotificationModal notification={this.state.notifications[notification]} />
                                ))}
                            </div>
                        }
                        {this.props.uid != null &&
                            <NavItem to={LISTA} active={this.state.active} title="Lista de equipos" onClick={this.changeActive} />
                        }
                        {this.props.uid != null &&
                            <NavItem to={PERFIL} active={this.state.active} title="Tu perfil" onClick={this.changeActive} />
                        }
                        {this.props.userName != null ?
                            <NavItem to={INICIO} active={this.state.active} title="Cerrar sesion" onLinkClicked={this.close} onClick={this.changeActive} />
                        :
                            <NavItem to={INICIO} active={this.state.active} title="Iniciar sesion" onClick={this.changeActive} />
                        }
                        {this.props.userName == null &&
                            <NavItem to={INICIO} active={this.state.active} title="Informacion" onClick={this.changeActive} />
                        }
                        {this.props.userName == null &&
                            <NavItem to={INICIO} active={this.state.active} title="Sobre nosotros" onClick={this.changeActive} />
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        userName: state.user.profile.email,
        uid: state.user.profile.uid
    }
}

export default NavBar = withRouter(connect(mapStateToProps)(NavBar));
