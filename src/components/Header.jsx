import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Header extends Component {
    render() {
        return (
            <Helmet>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description} />
            </Helmet>
        );
    }
}

export default Header;
