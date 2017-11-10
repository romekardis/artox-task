import React, { Component } from 'react';
import '../css/Block-users.css';
import PlaginSearch from './PlaginSearch';
import User from './User';
import Popup from './Popup';


class BlockUsers extends Component {

    constructor (props) {
        super(props);
        this.state = { users: this.props.data, desc: { name: '', email: '', phone: '' }, showPopup: false };
    }

    filterList = text => {
        let filtered = this.props.data.filter(function(user) {
            if (text.length < 3) return true;
            return user.name.toLowerCase().includes(text.toLowerCase());
        });
        this.setState({ users: filtered });
    }

    togglePopup = () => {
        this.setState( {showPopup: !this.state.showPopup} )
    }

    deleteUser = number => {
        let usersArr = this.state.users;
        usersArr.splice(number, 1);
        this.setState({ users: usersArr });
    }

    newUser = (desc) => {
        let array = this.state.users;
        array.push(desc);
        this.setState({ users: array });
    }

    render () {
        return (
            <div>
                <p className="icon-search"> <PlaginSearch filter={this.filterList} /> </p>
                <div className="blockUsers">
                    
                    {
                        this.state.users.map( (user, i) => {
                            return <User desc={user} key={i} index={i} deleteUser={this.deleteUser}/>
                        })
                    }
                    <div className="user user-new" onClick={ this.togglePopup }>
                        <span className="icon-plus"></span>
                    </div>
                </div>
                <Popup newUser={ this.newUser } show={ this.state.showPopup } desc={ this.state.desc } onClose={ this.togglePopup } />
            </div>
        );
    }
}
  
  export default BlockUsers;