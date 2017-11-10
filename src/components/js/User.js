import React, { Component } from 'react';
import Popup from './Popup';
import '../css/User.css';



class User extends Component {
    constructor (props) {
        super(props);
        this.state = { showPopup: false,  desc: this.props.desc}
    }

    togglePopup = desc => {
        this.setState( {showPopup: !this.state.showPopup} )
    }
    
    deleteUser = () => {
        this.props.deleteUser(this.props.index);
    }
        
    editUser = obj => {
        this.setState({ desc: obj });
    }

    render() {
        return (
            <div className="user">
                <Popup show={ this.state.showPopup } editUser={this.editUser} onClose={ this.togglePopup } desc={ this.state.desc } />
                <div className="user__buttons">
                    <span className="icon-pencil" onClick={this.togglePopup.bind(this, this.state.desc )}></span>
                    <span className="icon-bin2" onClick={this.deleteUser}></span>
                </div>
                <img className="user__image" src ={this.props.desc.photo}/>
                <div className="user__description">
                    <span>{this.props.desc.name}</span>
                    <span>{this.props.desc.phone}</span>
                    <span>{this.props.desc.email}</span>
                </div>  
            </div>
        )
    }
}

export default User;