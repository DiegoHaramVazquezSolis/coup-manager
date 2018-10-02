import React, { Component } from 'react';
import './Notification.css';

class Notifications extends Component {
    render() {
        return (
            <div>
                <button className="dropdown-item" data-toggle="modal" data-target={"#"+this.props.name.replace(' ','')}>
                {(this.props.type === "solicitud" &&
                this.props.name + " quiere unirse a tu equipo")
                ||
                (this.props.type === "partido" &&
                "Hoy tienes partido: " + this.props.name)
                }
                </button>
            </div>
        );
    }
}

export default Notifications;
