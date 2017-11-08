import React, { Component } from 'react';

class PlaginSearch extends Component {

    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged (event) {
        let text = event.target.value.trim();
        this.props.filter(text);
    }

    render () {
        return (
            <input type="text" onChange={this.onTextChanged} placeholder="Search" />
        )
    }
}


export default PlaginSearch;