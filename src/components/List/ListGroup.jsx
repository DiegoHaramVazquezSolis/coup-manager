import React, { Component } from 'react';
import'./ListGroup.css';
import { withRouter } from 'react-router-dom'

class ListGroup extends Component {
    state = {
        selectedIndex: -1
    };

    setSelectedIndex = (index) => {
        this.setState({selectedIndex: index});
    }

    claim = () => {
        this.props.history.push('/registro/miembro/'+this.props.items[this.state.selectedIndex].name);
    }

    render() {
        return (
            <div>
                <ul class="list-group">
                {this.props.items.map((item,index) => (
                    <li class={"list-group-item "+(index===this.state.selectedIndex ? "active":"")} onClick={() => this.setSelectedIndex(index)}>{item.name}</li>
                ))}
                </ul>
                {this.state.selectedIndex > -1 &&
                    <input className="btn btn-secondary btn-lg" type="button" value="!Pertenezco a este equipo!" onClick={this.claim} />
                }
            </div>
        );
    }
}

export default ListGroup = withRouter(ListGroup);
