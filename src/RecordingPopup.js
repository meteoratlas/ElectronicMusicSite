import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CloseModalButton from './CloseModalButton';
import AnimatedHeadline from './AnimatedHeadline';

const modalRoot = document.getElementById('modal-root');

class RecordingPopup extends Component {

    constructor(props) {
        super(props);
        this.state = { fullScreen: false  }

        this.element = document.createElement('div');

        this.divStyle = {
            background: ' linear-gradient(to left, rgba(0,0,0,0.33) 0%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%), url(' + props.image + ')',
            backgroundSize: '100%',
          };
    }
    /*
    toggleFullScreen = () => {
        this.setState(prevState => ({
        fullScreen: !prevState.fullScreen
        }));
    };
    */
    closeModal = () => {
        console.log("eh");
    };
    
    componentDidMount(){
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.element);
    }

    render() { 
        return ReactDOM.createPortal ( 
            <div className='modal-fullscreen'>
                <div className="modal-container " style={this.divStyle}>
                <div className="modal-titles">                            
                    <AnimatedHeadline headline={this.props.artist} headSize="h1"></AnimatedHeadline>
                    <AnimatedHeadline headline={this.props.title} headSize="h2"></AnimatedHeadline>
                    <h3>{this.props.year}</h3>
                    
                    <hr/>
                    <p className="rec-description">{this.props.description}</p>
                    <iframe width="560" height="315" src={this.props.youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    {//<div className="close-modal-button" onClick={this.toggleFullScreen}></div>
                    }
                    
                    <CloseModalButton />
                    
                    
                </div>    
                    {/*<img src={this.props.image} alt={this.props.title} />*/}
                    
                </div>
            </div>,
        this.element );
    }
}
 
export default RecordingPopup;