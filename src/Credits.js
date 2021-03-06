import React, { Component } from "react";

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.imgBg = {
            borderImage: `url('${process.env.PUBLIC_URL}/img/waveform.png') fill 30% 15%`,
        };
    }
    render() {
        return (
            <div className="credits" style={this.imgBg}>
                <h2>Credits</h2>
                <p>Designed, coded, and written by Kelly Horan</p>
                <p>Made with React, HTML5, JavaScript, and CSS</p>
                <p>
                    Images sourced from: RateYourMusic, MusicBrainz, Discogs,
                    Wikipedia, and The Vinyl Factory.
                </p>
            </div>
        );
    }
}

export default Credits;
