import React, { Component } from 'react';

class CardHeader extends Component {
    render() {
        return (
            <div className={"card-header "+this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default CardHeader;
