import React, { Component } from "react";

class CloseModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.img = {
            backgroundImage: `url('${process.env.PUBLIC_URL}/img/X.png')`
        };
    }
    render() {
        return (
            <button
                className="close-modal-button"
                onClick={this.props.onClick}
                style={this.img}
            ></button>
        );
    }
}

export default CloseModalButton;
