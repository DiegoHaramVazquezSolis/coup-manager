import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import ListGroup from './List/ListGroup';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import Header from './Header';
import { getAllTeams } from '../redux/actions/teamsActions';

class ListOfTeams extends Component {
    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(!prevState.loaded){
            nextProps.getAllTeams();
            return {loaded: true}
        }
        return null;
    }

    render() {
        if (this.props.fetched) {
            return (
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Header title="Unete a un equipo" />
                        <Card>
                            <CardHeader color="primary">
                                Lista de equipos
                            </CardHeader>
                            <CardBody>
                                <input type="text" readOnly className="form-control-plaintext" value="Selecciona el equipo al que perteneces" />
                                <ListGroup items={this.props.teams} />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            );
        }else {
            return (<h1>Cargando</h1>);
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

function mapStateToProps(state){
    return {
        teams: state.teams.teams,
        fetched: Object.keys(state.teams.teams).length > 0
    }
}

export default ListOfTeams = connect(mapStateToProps, {mapDispatchToProps, getAllTeams})(ListOfTeams);
