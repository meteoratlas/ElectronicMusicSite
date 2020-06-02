import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import PageHeader from "./PageHeader";
import RecordingContainer from "./RecordingContainer";
import PageBottom from "./PageBottom";
import Credits from "./Credits";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 50,
                                },
                                size: {
                                    value: 3,
                                },
                            },
                        }}
                    />
                    <div className="app-overlay" />
                    <PageHeader />
                    <RecordingContainer />
                    <Credits />
                    <PageBottom />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
