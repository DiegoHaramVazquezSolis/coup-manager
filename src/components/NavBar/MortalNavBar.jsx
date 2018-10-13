import React, { Component } from 'react';
import { REGISTRO, LISTA, INICIO, SPONSORS } from '../Const/PathName';
import NavLinkItem from './NavLinkItem';

class MortalNavBar extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                <NavLinkItem to={REGISTRO} active={this.props.active} title="Registrar a mi equipo" onClick={this.props.changeActive} />
                <NavLinkItem to={LISTA} active={this.props.active} title="Unirme a un equipo" onClick={this.props.changeActive} />
                <NavLinkItem to={INICIO} active={this.props.active} title="Iniciar sesion" onClick={this.props.changeActive} />
                <NavLinkItem to={SPONSORS} active={this.props.active} title="Patrocinadores" onClick={this.props.changeActive} />
                <NavLinkItem to={INICIO} active={this.props.active} title="Sobre nosotros" onClick={this.props.changeActive} />
            </ul>
        );
    }
}

export default MortalNavBar;
