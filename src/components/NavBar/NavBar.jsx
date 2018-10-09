import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from './../../logo.svg';
import "./../../styles/NavBar.css";
import { withRouter,Link } from 'react-router-dom';
import {INICIO} from './../Const/PathName';
import NavBarAuthenticatedUser from './NavBarAuthenticatedUser';
import MortalNavBar from './MortalNavBar';

class NavBar extends Component {
    state = {
        userLoaded: false,
        active: INICIO
    };

    componentWillMount() {
        this.setState({ active: this.props.location.pathname });
    }

    changeActive = (newPathName) => {
        this.setState({ active: newPathName });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Master coup <Logo className="App-logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.props.userName == null &&
                        <MortalNavBar active={this.state.active} changeActive={this.changeActive} />
                    }
                    {this.props.uid != null &&
                        <NavBarAuthenticatedUser push={this.props.history.push} active={this.state.active} changeActive={this.changeActive} uid={this.props.uid} loadNotifications={this.loadNotifications} />
                    }
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
