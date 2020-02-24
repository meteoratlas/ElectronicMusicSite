import React, { Component } from "react";

import Recording from "./Recording";
import Data from "./data.json";
import SortMenu from "./SortMenu";

class RecordingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { recordings: [], currentSort: 0 };
        this.sortingOptions = {
            DATE_ASCENDING: 0,
            DATE_DESCENDING: 1,
            TITLE: 2,
            ARTIST: 3
        };
        this.initRecordings = [];
        this.populateRecordings();
        this.reversed = [...this.initRecordings].reverse();
        this.titleSorted = [...this.initRecordings].sort(
            this.sortByTitleAlphabetical
        );
        this.artistSorted = [...this.initRecordings].sort(
            this.sortByArtistAlphabetical
        );
    }

    componentDidMount() {
        this.setState({
            recordings: this.initRecordings
        });
        this.elements = document.getElementsByClassName("rec-grid")[0];
    }

    populateRecordings() {
        for (let i = 0; i < Data.recordings.length; i++) {
            this.initRecordings.push(
                <Recording
                    key={Data.recordings[i].year}
                    artist={Data.recordings[i].artist}
                    title={Data.recordings[i].title}
                    year={Data.recordings[i].year}
                    // https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js
                    imgSrc={
                        process.env.PUBLIC_URL +
                        "/img/" +
                        Data.recordings[i].image
                    }
                    youtube={Data.recordings[i].youtube}
                    description={Data.recordings[i].description}
                    offset={i + 1}
                />
            );
        }
    }

    handleDateAscendingButton() {
        if (this.state.currentSort === 0) return;

        this.setState(state => ({
            recordings: this.initRecordings,
            currentSort: 0
        }));
        this.animate();
    }

    handleDateDescendingButton() {
        if (this.state.currentSort === 1) return;
        this.setState(state => ({
            recordings: this.reversed,
            currentSort: 1
        }));
        this.animate();
    }

    handleAlphabeticalTitleButton() {
        if (this.state.currentSort === 2) return;
        this.setState(state => ({
            recordings: this.titleSorted,
            currentSort: 2
        }));
        this.animate();
    }

    handleAlphabeticalArtistButton() {
        if (this.state.currentSort === 3) return;
        this.setState(state => ({
            recordings: this.artistSorted,
            currentSort: 3
        }));
        this.animate();
    }

    animate() {
        this.elements.className = "rec-grid";
        void this.elements.offsetWidth;
        this.elements.className = "rec-grid animate-in";
    }

    sortByDateAscending(a, b) {
        return Number(a.props.year) - Number(b.props.year);
    }
    sortByDateDescending(a, b) {
        return Number(b.props.year) - Number(a.props.year);
    }
    sortByArtistAlphabetical(a, b) {
        let artistA = a.props.artist.toUpperCase();
        let artistB = b.props.artist.toUpperCase();

        if (artistA < artistB) {
            return -1;
        }
        if (artistA > artistB) {
            return 1;
        }
        return 0;
    }
    sortByTitleAlphabetical(a, b) {
        let titleA = a.props.title.toUpperCase();
        let titleB = b.props.title.toUpperCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    }

    render() {
        return (
            <div className="recordingContainer">
                <SortMenu
                    dateAsc={this.handleDateAscendingButton.bind(this)}
                    dateDes={this.handleDateDescendingButton.bind(this)}
                    titleAlph={this.handleAlphabeticalTitleButton.bind(this)}
                    artistAlph={this.handleAlphabeticalArtistButton.bind(this)}
                />
                <div className="rec-grid">{this.state.recordings}</div>
            </div>
        );
    }
}

export default RecordingContainer;
