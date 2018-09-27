import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormGroup from '../Forms/FormGroup';
import { usersRef } from '../../services/DatabaseService';
import toastr from 'toastr';

class UserInfo extends Component {
    state = {
        edit: false,
        name: '',
        alias: '',
        number: 0,
        position: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    toogleEdit = (e) => {
        this.setState({edit: true});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, alias, number, position} = this.state;
        usersRef.child(this.props.profile.uid).update({name, alias, number, position},(error) => {
            if(error) {
                toastr.error("Error al actualizar informacion");
                console.log(error);
            } else {
                toastr.success("Listo, informacion guardada");
            }
        });
        this.setState({edit: false});
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.name === ''){
            console.log(nextProps);
            return {name: nextProps.profile.name || '', alias: nextProps.profile.alias, number: nextProps.profile.number || 0, position: nextProps.profile.position};
        }
        return null;
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup>
                    <label htmlFor="name" onDoubleClick={this.toogleEdit}>Nombre</label>
                    <input type="text" name="name" id="name" className={this.state.edit ? "form-control" :"form-control-plaintext"} value={this.state.name} onChange={this.onChange} disabled={this.state.edit ? false : true}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="alias" onDoubleClick={this.toogleEdit}>Apodo</label>
                    <input type="text" name="alias" id="alias" className={this.state.edit ? "form-control" :"form-control-plaintext"} value={this.state.alias} onChange={this.onChange} disabled={this.state.edit ? false : true}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="number" onDoubleClick={this.toogleEdit}>Numero de playera</label>
                    <input type="text" name="number" id="number" className={this.state.edit ? "form-control" :"form-control-plaintext"} value={this.state.number} onChange={this.onChange} disabled={this.state.edit ? false : true}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="position" onDoubleClick={this.toogleEdit}>Posicion</label>
                    <select className={"custom-select"} name="position" id="position" value={this.state.position} onChange={this.onChange} disabled={this.state.edit ? false : true}>
                        <option value="" selected>Escoge tu posicion</option>
                        <option value="Portero">Portero</option>
                        <option value="Defensa Central">Defensa central</option>
                        <option value="Defensa lateral">Defensa lateral</option>
                        <option value="Mediocampo defensivo">Mediocampo defensivo</option>
                        <option value="Mediocampo central">Mediocampo central</option>
                        <option value="Mediocampo externo">Mediocampo externo</option>
                        <option value="Mediocampo ofensivo">Mediocampo ofensivo</option>
                        <option value="Media punta">Media punta</option>
                        <option value="Centro delantero">Centro delantero</option>
                        <option value="Punta">Punta</option>
                        <option value="Extremo">Extremo</option>
                        <option value="Delantero centro">Delantero centro</option>
                    </select>
                </FormGroup>
                {this.state.edit && 
                    <input type="submit" className="btn btn-dark btn-lg" value="Guardar cambios" />
                }
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.user.profile
    }
}

export default UserInfo = connect(mapStateToProps)(UserInfo);
