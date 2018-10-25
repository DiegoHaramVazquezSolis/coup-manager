import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../CustomButtons/Button';
import { chatsRef } from '../../services/DatabaseService';
import { serverValue } from '../../firebase';

class CreateMessageForm extends Component {
    state = {
        currentMessage: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        chatsRef.child(this.props.teamName.replace(' ','').toUpperCase()).push({
            message: this.state.currentMessage,
            sender: this.props.sender,
            timeStamp: serverValue.TIMESTAMP
        });
        this.setState({ currentMessage: '' });
    }

    render() {
        return (
            <GridContainer>
                <GridItem xs={1} sm={1} md={1}></GridItem>
                <GridItem xs={10} sm={10} md={10}>
                    <form onSubmit={this.onSubmit}>
                        <CustomInput
                            value={this.state.currentMessage}
                            onChange={(e) => this.setState({ currentMessage: e.target.value })}
                            id="currentMessage"
                            formControlProps={{
                                fullWidth: true
                            }}
                            labelText="Mensaje para el equipo"
                            required={true}
                            inputProps = {{
                                onInvalid: (e) => e.target.setCustomValidity('Por favor, escribe un mensaje'),
                                onInput: (e) => e.target.setCustomValidity(''),
                            }}
                        />
                        <Button type="submit">
                            Enviar
                        </Button>
                    </form>
                    <br/>
                </GridItem>
            </GridContainer>
        );
    }
}

CreateMessageForm.propTypes = {
    teamName: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
};

export default CreateMessageForm;
