import React, { Component } from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import MemberSignInForm from './MemberSignInForm';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Header from './../Header';

class MemberSignIn extends Component {
    render() {
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Header title="Bienvenido al equipo" />
                    <Card>
                        <CardHeader color="primary">
                            Bienvenido, registrate con {this.props.match.params.id}
                        </CardHeader>
                        <CardBody>
                            <MemberSignInForm team={this.props.match.params.id} />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default MemberSignIn;
