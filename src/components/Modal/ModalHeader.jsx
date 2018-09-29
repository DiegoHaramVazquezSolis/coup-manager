import React, { Component } from 'react';

class ModalHeader extends Component {
    render() {
        return (
            <div className="modal-header">
                <h5 className="modal-title">{this.props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default ModalHeader;
