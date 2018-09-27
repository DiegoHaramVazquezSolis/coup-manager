import React, { Component } from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import MemberSignInForm from './MemberSignInForm';

class MemberSignIn extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Bienvenido, registrate con {this.props.match.params.id}
                </CardHeader>
                <CardBody>
                    <MemberSignInForm team={this.props.match.params.id} />
                </CardBody>
            </Card>
        );
    }
}

export default MemberSignIn;
