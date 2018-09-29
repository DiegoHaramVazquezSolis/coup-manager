import React, { Component } from 'react';
import ModalDialog from './ModalDialog';

class ModalFade extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
                <ModalDialog>
                    {this.props.children}
                </ModalDialog>
            </div>
        );
    }
}

export default ModalFade;
