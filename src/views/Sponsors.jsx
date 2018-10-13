import React, { Component } from 'react';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardBody from '../components/Card/CardBody';
import LogoInfinito from './../assets/Logo_Infinito.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Header from './../components/Header';

class Sponsors extends Component {
    render() {
        return (
            <GridContainer>
                <Header title="Patrocinadores" />
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            Patrocinadores
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={6} md={6}>
                                    <Card>
                                        <CardHeader color="infinito">
                                            Etiquetas infinito
                                        </CardHeader>
                                        <CardHeader color="">
                                            <center>
                                                <img height="100px" width="220px" src={LogoInfinito} alt=""/>
                                            </center>
                                        </CardHeader>
                                        <CardBody>
                                            <List>
                                                <ListItem>
                                                    <ListItemText 
                                                        primary={<a href="http://etiquetasinfinito.com" target="_blank" rel="noopener noreferrer">Sitio web</a>}
                                                        secondary="www.etiquetasinfinito.com" />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText 
                                                        primary={<a href="https://www.google.com.mx/maps/place/Gonz%C3%A1lez+Plascencia+Rosalio/@20.6058565,-103.2933244,17z/data=!3m1!4b1!4m5!3m4!1s0x8428b31361dc268b:0x653afb544361c450!8m2!3d20.6058565!4d-103.2911357" target="_blank" rel="noopener noreferrer"> Ubicacion</a>}
                                                        secondary="Felipe González Velázquez 8, El Cerrito, 44008 San Pedro Tlaquepaque, Jal." />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText
                                                        primary="Telefono"
                                                        secondary="01 33 3666 7227" />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemText
                                                        primary="Correo electronico"
                                                        secondary={<a href="mailto:etiquetas.infinito@hotmail.com">etiquetas.infinito@hotmail.com</a>} />
                                                </ListItem>
                                            </List>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default Sponsors;
