import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThumbnailLogo extends Component {
    render() {
        return (
            <img className={this.props.className} src={this.props.logo} alt="" />
        );
    }
}

ThumbnailLogo.propTypes = {
    logo: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default ThumbnailLogo;
