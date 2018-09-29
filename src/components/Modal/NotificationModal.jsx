import React, { Component } from 'react';
import ModalFade from './ModalFade';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { connect } from 'react-redux';
import { teamsRef, usersRef, matchesRef } from '../../services/DatabaseService';
import avatar from '../../assets/avatar.svg';

class NotificationModal extends Component {
    state = {
        titulo: '',
        mensaje: '',
        logo: '',
        firstParam: '',
        secondParam: 0,
        thirdParam: '',
        fourthParam: '',
        fifthParam: '',
        loaded: false
    };

    render() {
        if(!this.state.loaded && this.props.team !== undefined){
            switch (this.props.notification.type) {
                case "solicitud":
                    usersRef.child(this.props.notification.sender).on('value', (solicitante) => {
                        this.setState({ 
                            titulo: this.props.notification.name + " quiere unirse a tu equipo",
                            mensaje: "Solicitud para unirse a tu equipo",
                            firstParam: "Posicion: "+solicitante.val().position || "No definida",
                            secondParam: "Numero: "+solicitante.val().number || "No definido",
                            thirdParam: "Nombre: "+solicitante.val().name,
                            fourthParam: "Edad: "+solicitante.val().age || "No definido",
                            fifthParam: "Apodo: "+solicitante.val().alias || "Sin apodo",
                            logo: solicitante.val().foto || avatar,
                            loaded: true
                        });
                    });
                    break;
                case "partido":
                    matchesRef.orderByChild("title").equalTo(this.props.notification.name).once('value', (matches) => {
                        matches.forEach((match) => {
                            this.setState({
                                titulo: "Hoy tienes partido: "+this.props.notification.name,
                                mensaje: "Día de partido",
                                firstParam: "Fecha: "+match.val().date,
                                secondParam: "Hora: "+match.val().hour,
                                thirdParam: "Local: "+match.val().local,
                                fourthParam: "Visitante: "+match.val().visitante,
                                fifthParam: "Rival: "+ (match.val().local === this.props.team ? match.val().visitante : match.val().local)
                            });
                        });
                    });
                    teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                        this.setState({logo: logo.val(), loaded: true});
                    });
                    break;
                default:
                    break;
            }
        }
        return (
            <ModalFade id={this.props.notification.name.replace(' ','')} >
                <ModalHeader title={this.state.titulo} />
                <ModalBody>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-thumbnail rounded-circle" src={this.state.logo} alt=""/>
                        </div>
                        <div className="col-md-7 ml-auto">
                            {this.state.mensaje}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-8">
                            {this.state.firstParam}
                        </div>
                        <div className="col-md-4 ml-auto">
                            {this.state.secondParam}
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-8">
                            {this.state.thirdParam}
                        </div>
                        <div className="col-md-4 ml-auto">
                            {this.state.fourthParam}
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-7">
                            {this.state.fifthParam}
                        </div>
                        <div className="col-md-4 ml-auto">
                            <input type="button" className="btn btn-dark btn-sm" value="Enviar mensaje"/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter onClickNegative={() => console.log("Negative")} onClickPositive={() => console.log("Positive")} negativeButton="Cerrar" positiveButton="Aceptar" />
            </ModalFade>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.user.profile.team
    }
}

export default NotificationModal = connect(mapStateToProps)(NotificationModal);
