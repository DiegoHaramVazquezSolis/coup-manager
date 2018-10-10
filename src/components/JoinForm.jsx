import React, { Component } from 'react';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import RegisterForm from './RegisterForm';
import Collapse from './Collapse';
import TeamForm from './TeamForm/TeamForm';
import toastr from 'toastr';
import Header from './Header';
import Button from './CustomButtons/Button';

class JoinForm extends Component {
    state = {
        currentStep: 0
    };

    nextStep = () => {
        this.setState({currentStep: this.state.currentStep+1});
    }

    setStep = (index) => {
        this.setState({currentStep: index});
    }

    continue = () => {
        toastr.success("Esto te manda a otra pagina :v");
    }

    render() {
        return (
            <Card>
                <Header title="Registro" description="Registro de capitan y equipo para copa 2018/9"/>
                <CardHeader color={this.state.currentStep === 0 ? "primary" : this.state.currentStep > 0 ? "success" : ""}>
                    Registro personal
                </CardHeader>
                <CardBody close={this.state.currentStep !== 0}>
                    <Collapse show={this.state.currentStep === 0 ? "show" : ""}>
                        <RegisterForm nextStep={this.nextStep} />
                    </Collapse>
                </CardBody>
                <CardHeader color={this.state.currentStep === 1 ? "primary" : this.state.currentStep > 1 ? "success" : ""}>
                    Registra a tu equipo
                </CardHeader>
                <Collapse id="collapseTeam" show={this.state.currentStep === 1 ? "show" : ""}>
                    <CardBody close={this.state.currentStep !== 1}>
                        <TeamForm nextStep={this.nextStep} />
                    </CardBody>
                </Collapse>
                <Collapse id="collapse" show={this.state.currentStep === 2 ? "show" : ""}>
                    <CardBody close={this.state.currentStep !== 2}>
                        <Button onClick={this.continue}>
                            Continuar
                        </Button>
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

export default JoinForm;
