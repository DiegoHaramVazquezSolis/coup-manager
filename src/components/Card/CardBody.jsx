import React, { Component } from 'react';
import './Card.css';

class CardBody extends Component {
    render() {
        return (
            <div className={"card-body "+(this.props.close === true ? "noPadding" : "")}>
                {this.props.children}
            </div>
        );
    }
}

export default CardBody;
