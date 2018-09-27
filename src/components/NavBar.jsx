import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './../logo.svg';
import "./../styles/NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Master coup <img className="App-logo" src={logo} alt="Logotipo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Registro <span className="sr-only">(current)</span></a>
                    </li>
                    {this.props.userName !== null ?
                    <li className="nav-item">
                        <a className="nav-link">Bienvenido {this.props.userName}</a>
                    </li>
                    :
                    <li className="nav-item">
                        <a className="nav-link" href="/">Iniciar sesion</a>
                    </li>
                    }
                    <li className="nav-item">
                        <a className="nav-link" href="/">Informacion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sobre nosotros</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        userName: state.user.profile.email
    }
}

export default NavBar = connect(mapStateToProps)(NavBar);
