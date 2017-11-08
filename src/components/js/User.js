import React, { Component } from 'react';
import '../css/User.css';



class User extends Component {
    constructor (props) {
        super(props);
    }

    
    render() {
        return (
            <div className="user">
                <div className="user__buttons">
                    <span className="icon-pencil"></span>
                    <span className="icon-bin2"></span>
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