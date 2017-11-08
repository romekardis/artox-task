import React, { Component } from 'react';
import '../css/Block-users.css';
import PlaginSearch from './PlaginSearch';
import User from './User';


class BlockUsers extends Component {

    constructor (props) {
        super(props);
        this.state = { users: this.props.data };
    }

    filterList(text) {
        let filtered = this.props.data.filter(function(user) {
            if (text.length < 3) return true;
            return user.name.toLowerCase().search(text.toLowerCase()) + 1;
        });

        this.setState({ users: filtered });
    }

    render () {
        return (
            <div>
                <p className="icon-search"> <PlaginSearch filter={this.filterList.bind(this)} /> </p>
                <div className="blockUsers">
                    <div className="user user-new">
                        <span className="icon-plus"></span>
                    </div>
                    {
                        this.state.users.map(function (user, i) {
                            return <User desc={user} key={i + 1}/>
                        })
                    }
                </div>
            </div>
        );
    }
}
  
  export default BlockUsers;