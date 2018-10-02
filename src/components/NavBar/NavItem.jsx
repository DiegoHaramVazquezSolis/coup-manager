import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavItem extends Component {
    onClick = () => {
        this.props.onClick(this.props.to);
    }
    render() {
        return (
            <li className={"nav-item "+(this.props.active === this.props.to ? "active":"")} onClick={this.onClick}>
                <Link className="nav-link" to={this.props.to}>{this.props.title}</Link>
            </li>
        );
    }
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onLinkClicked: PropTypes.func
};

export default NavItem;
