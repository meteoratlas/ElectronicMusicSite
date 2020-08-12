import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import PageHeader from "./PageHeader";
import RecordingContainer from "./RecordingContainer";
import PageBottom from "./PageBottom";
import Credits from "./Credits";

class App extends Component {
    render() {
        const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        // use less particles on devices with smaller screens
        const numOfParticles = width > 800 ? 150 : 25;

        return (
            <React.Fragment>
                <div className="App">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: numOfParticles,
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
