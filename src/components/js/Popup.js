import React, { Component } from 'react';
import './../css/Popup.css'



class Popup extends Component {
    constructor (props) {
        super(props);
        this.state = { desc: this.props.desc };
    }

    newOrEditUser = () => {
        let obj = this.state.desc;
        if (obj.name === '' ||
            obj.email === '' ||
            obj.phone === '') {
                return false;
            }



        this.props.onClose();
    }

    onChanged = () => {
        
    }

    render() {
        
        const styles = {
            modal: {
                display: (this.props.show) ? null : 'none', 
                backgroundColor: 'rgba(0, 0, 0, 0.8)',       
            }
        };

        return (
            <div className="popup" style={ styles.modal }>
            <div className="popup__block">
                <form action="#">
                    <p className="popup__block-text icon-user"><input onChange={ this.onChanged } type="text" name="userName" placeholder="Name" defaultValue={this.state.desc.name} /></p>
                    <p className="popup__block-text icon-envelop"><input type="text" name="userEmail" placeholder="Email" defaultValue={this.state.desc.email}/></p>
                    <p className="popup__block-text icon-phone"><input type="text" name="userPhone" placeholder="Phone" defaultValue={this.state.desc.phone}/></p>
                    <p className="popup__block-photo">
                        <span></span>
                        <input type="file"></input>
                    </p>
                    <p className="popup__block-buttons">
                        <input type="button" value="Сохранить"/>
                        <input type="button" value="Отмена" onClick={ this.props.onClose }/>
                    </p>
                </form>
            </div>
        </div>
        )
    }
}

export default Popup;