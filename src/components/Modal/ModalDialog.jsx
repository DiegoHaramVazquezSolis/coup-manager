import React, { Component } from 'react';

class ModalDialog extends Component {
    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ModalDialog;
