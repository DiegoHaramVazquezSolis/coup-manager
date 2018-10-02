import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Col extends Component {
    render() {
        return (
            <div className={"col-md-"+this.props.cols+((this.props.left && " ml-auto") || "")}>
                {this.props.children}
            </div>
        );
    }
}

Col.propTypes = {
    cols: PropTypes.string.isRequired,
    left: PropTypes.bool
};

export default Col;
