import React, { Component } from 'react';

class CloseModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <button className="close-modal-button" onClick={this.props.onClick}></button>
        );
    }
}
 
export default CloseModalButton;