import React, { Component } from 'react';
import'./ListGroup.css';
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '../CustomButtons/Button';

class ListGroup extends Component {
    state = {
        selectedIndex: ""
    };

    setSelectedIndex = (index) => {
        this.setState({selectedIndex: index});
    }

    claim = () => {
        this.props.history.push('/registro/miembro/'+this.props.items[this.state.selectedIndex].name);
    }

    render() {
        return (
            <List>
                {Object.keys(this.props.items).map((item,index) => (
                    <ListItem selected={this.state.selectedIndex === index} key={index} dense button onClick={() => this.setSelectedIndex(item)}>
                        <Avatar alt={this.props.items[item].name} src={this.props.items[item].logo} />
                        <ListItemText primary={this.props.items[item].name} secondary={Object.keys(this.props.items[item].Players).length+" miembros"} />
                    </ListItem>
                ))}
                <br/>
                {this.state.selectedIndex !== "" &&
                    <Button onClick={this.claim}>
                        ¡Pertenezco a este equipo!
                    </Button>
                }
            </List>
        );
    }
}

export default ListGroup = withRouter(ListGroup);
