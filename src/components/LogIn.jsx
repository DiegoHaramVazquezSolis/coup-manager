import React, { Component } from 'react';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import { signIn } from '../services/AuthService';
import Header from './Header';
import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer.jsx";
import CustomInput from './CustomInput/CustomInput';
import CardFooter from './Card/CardFooter';
import Button from "./CustomButtons/Button.jsx";
/*
import CardAvatar from "components/Card/CardAvatar.jsx";
*/
class LogIn extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSumbit = (e) => {
        e.preventDefault();
        signIn(this.state.email, this.state.password);
    }

    render() {
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <Header title="Inicio de sesion" />
                        <form onSubmit={this.onSumbit}>
                            <CardHeader color="primary">
                                Inicio de sesion
                            </CardHeader>
                            <CardBody>
                                    <CustomInput 
                                        labelText="Correo electronico"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }} 
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        required={true}
                                        type="email"/>
                                    <CustomInput 
                                        labelText="Contraseña"
                                        id="password"
                                        formControlProps={{
                                            fullWidth: true
                                        }} 
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        required={true}
                                        type="password" />
                                
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" color="">Ingresar</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default LogIn;
