import React, { Component } from 'react';

class ModalFooter extends Component {
    render() {
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onClickNegative}>{this.props.negativeButton}</button>
                <button type="button" className="btn btn-dark" onClick={this.props.onClickPositive} >{this.props.positiveButton}</button>
            </div>
        );
    }
}

export default ModalFooter;
