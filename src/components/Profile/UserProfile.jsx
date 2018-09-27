import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInfo from './UserInfo';
import './Profile.css';

class UserProfile extends Component {
    state = {
        edit: false
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <UserInfo />
                </div>
                <div className="col">
                    <img className="img-thumbnail rounded-circle profile-image" src={this.props.foto ? this.props.foto : "https://firebasestorage.googleapis.com/v0/b/coup-manager.appspot.com/o/TeamsLogos%2FLogoBarca.png?alt=media&token=b275b0d3-6173-40a2-89b4-7d31a9d4b532"} alt=""/>
                    <div className="mask flex-center">
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        image: state.user.foto
    }
}

export default UserProfile = connect(mapStateToProps)(UserProfile);
