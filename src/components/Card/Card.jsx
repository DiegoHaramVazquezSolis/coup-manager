import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="bd-example">
                <div className="card">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;
