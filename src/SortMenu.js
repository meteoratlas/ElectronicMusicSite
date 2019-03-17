import React, { Component } from 'react';

class SortMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="sort-menu">
                <h1>Sorting Options</h1>
                <button onClick={this.props.dateAsc}>by year ascending</button>
                <button onClick={this.props.dateDes}>by year descending</button>
                <button onClick={this.props.titleAlph}>by title</button>
                <button onClick={this.props.artistAlph}>by artist</button>
            </div>
         );
    }
}

export default SortMenu;