import React, { Component } from "react";
import "./App.css";
import PageHeader from "./PageHeader";
import RecordingContainer from "./RecordingContainer";
import PageBottom from "./PageBottom";
import Credits from "./Credits";

class App extends Component {
    imgBg = (this.imgBg = {
        background: `url('${process.env.PUBLIC_URL}/img/bg4.png')`
    });
    render() {
        return (
            <div className="App">
                <div className="app-overlay" style={this.imgBg}></div>
                <PageHeader />
                <RecordingContainer />
                <Credits />
                <PageBottom />
            </div>
        );
    }
}

export default App;
