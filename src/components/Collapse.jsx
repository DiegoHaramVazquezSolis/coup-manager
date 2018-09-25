import React, { Component } from 'react';

class Collapse extends Component {
    render() {
        return (
            <div className={"collapse "+this.props.show} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}

export default Collapse;
