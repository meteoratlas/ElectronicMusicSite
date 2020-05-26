import React, { Component } from 'react';

class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <div className="headline-bg">
                    <h1>50 Years of Elect&shy;ronic Music</h1>
                </div>
                <p>The influence of technology on music has gone from obscure instruments and esoteric experimentation to an essential component of music production. Here are 50 recordings that have shaped the landscape of music and made electronic music one of the most vibrant artistic fields in our culture.</p>
            </div>
         );
    }
}
 
export default PageHeader;