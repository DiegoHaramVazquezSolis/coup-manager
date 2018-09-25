import React, { Component } from 'react';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import RegisterForm from './RegisterForm';
import Collapse from './Collapse';
import TeamForm from './TeamForm';

class JoinForm extends Component {
    state = {
        currentStep: 1
    };

    nextStep = () => {
        this.setState({currentStep: this.state.currentStep+1});
    }

    setStep = (index) => {
        this.setState({currentStep: index});
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    Registro personal
                </CardHeader>
                <CardBody>
                    <Collapse show={this.state.currentStep === 0 ? "show" : ""}>
                        <RegisterForm nextStep={this.nextStep} />
                    </Collapse>
                </CardBody>
                <CardHeader style="border-top">
                    Registra a tu equipo
                </CardHeader>
                <Collapse id="collapseTeam" show={this.state.currentStep === 1 ? "show" : ""}>
                    <CardBody>
                        <TeamForm nextStep={this.nextStep} />
                        {this.state.currentStep !== 1 &&
                        <button className="btn btn-outline-primary btn-lg btn-block" onClick={() => this.setStep(1)}>Volver a este paso</button>
                        }
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

export default JoinForm;
