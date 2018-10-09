import React, { Component } from 'react';
import { REGISTRO, LISTA, PERFIL, INICIO } from '../Const/PathName';
import NavLinkItem from './NavLinkItem';

class MortalNavBar extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                <NavLinkItem to={REGISTRO} active={this.props.active} title="Registro" onClick={this.props.changeActive} />
                <NavLinkItem to={LISTA} active={this.props.active} title="Lista de equipos" onClick={this.props.changeActive} />
                <NavLinkItem to={PERFIL} active={this.props.active} title="Tu perfil" onClick={this.props.changeActive} />
                <NavLinkItem to={INICIO} active={this.props.active} title="Iniciar sesion" onClick={this.props.changeActive} />
                <NavLinkItem to={INICIO} active={this.props.active} title="Informacion" onClick={this.props.changeActive} />
                <NavLinkItem to={INICIO} active={this.props.active} title="Sobre nosotros" onClick={this.props.changeActive} />
            </ul>
        );
    }
}

export default MortalNavBar;
