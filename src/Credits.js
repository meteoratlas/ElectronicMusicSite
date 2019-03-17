import React, { Component } from 'react';

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="credits">
                <h2>Credits</h2>
                <p>Designed, coded, and written by Kelly Horan</p>
                <p>Made with React, HTML5, JavaScript, and CSS</p>
                <p>Image Credits: RateYourMusic, MusicBrainz, Discogs, Wikipedia, and The Vinyl Factory.</p>
                {/*
                <ul>
                    <li>RateYourMusic</li>
                    <li>MusicBrainz</li>
                    <li>Discogs</li>
                    <li>Wikipedia</li>
                    <li>The Vinyl Factory (https://thevinylfactory.com/features/electric-futurism-francis-bebey/)</li>
                </ul>
                */}
            </div>
         );
    }
}
 
export default Credits;