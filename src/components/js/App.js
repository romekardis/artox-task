import React, { Component } from 'react';
import '../css/App.css';
import BlockUsers from './Block-users';

import Avatar from '../../img/user-photo.jpg';

const users = [
    {
        name: 'Roman',
        email: 'rome.kardis@icloud.com',
        phone: '+375298777208',
        photo: Avatar
    },
    {
        name: 'Loremmm',
        email: 'lorem-ipsum@icloud.com',
        phone: '+375291111111',
        photo: Avatar
    },
    {
        name: 'LLLorem',
        email: 'lorem-ipsum@icloud.com',
        phone: '+375291111112',
        photo: Avatar
    },
    {
        name: 'Looorem',
        email: 'lorem-ipsum@icloud.com',
        phone: '+375291111113',
        photo: Avatar
    }
];

class App extends Component {

    render() {
        return (
            <div className="app">
                <BlockUsers data={users}/>
            </div>
        );
    }
}
  
  export default App;