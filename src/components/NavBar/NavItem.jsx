import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {
    render() {
        return (
            <li className={"nav-item "+this.props.className} onClick={this.onClick}>
                {this.props.children}
            </li>
        );
    }
}

NavItem.propTypes = {
    className: PropTypes.string || ""
}

export default NavItem;
