import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import CloseModalButton from './CloseModalButton';
import AnimatedHeadline from './AnimatedHeadline';

const modalRoot = document.getElementById('modal-root');

class Recording extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            active: false,
            className: 'recording-margin'
        }
        this.portalElement = document.createElement('div');
        this.divStyle = {
            background: ' linear-gradient(to left, rgba(0,0,0,0.33) 0%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%), url(' + props.imgSrc + ')',
            backgroundSize: '100%',
          };
        this.handleClick = this.handleClick.bind(this);

        //this.CSSOffset = "recording-margin data-offset=" + this.props.offset;
    }
    
    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({
            active: false
        }));
        let body = document.getElementsByTagName('body')[0];

        if (body.classList.length === 0){
            body.classList.add('modal-active');
        }
        else {
            body.classList.remove('modal-active');
        }
    }
    
    toggleFullScreen = (e) => {
        if (this.state.active){return;}

        e.preventDefault();
        this.setState(prevState => ({
            active: true//!prevState.active
        }));

        let body = document.getElementsByTagName('body')[0];

        if (body.classList.length === 0){
            body.classList.add('modal-active');
        }
        else {
            body.classList.remove('modal-active');
        }
      };

    closeModal = () => {
        console.log("close modal");
        this.setState(prevState => ({
            active: false
        }));
    };

    componentDidMount(){
        const animated = document.querySelector('.recording-margin');
        animated.addEventListener('animationcancel', () => {
            console.log('Animation cancel');
          });
    }  

    render() { 
        let modal;
        if (this.state.active) {
            modal = 
            <div className='modal-fullscreen'>
                <div className="modal-popup" style={this.divStyle}>
                    
                        <div className="modal-titles">                            
                            <AnimatedHeadline headline={this.props.artist} headSize="h1"></AnimatedHeadline>
                            <AnimatedHeadline headline={this.props.title} headSize="h2"></AnimatedHeadline>
                            <h3>{this.props.year}</h3>
                            <hr/>
                        </div>     
                        <div className="modal-container " >
                        <p className="rec-description">{this.props.description}</p>
                        <div className="youtube-wrapper">
                            <iframe title="YouTube Video" width="560" height="315" src={this.props.youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>  
                        <CloseModalButton onClick={this.handleClick}/>                  
                    </div>
                </div>
            </div>

            /*
            modal = <RecordingPopup 
                artist={this.props.artist}
                title={this.props.title}
                year={this.props.year}
                image={this.props.imgSrc}
                description={this.props.description}
                youtube={this.props.youtube}
                onClick={this.closeModal}
            />*/
        }

        return ( 
            <div className={/*this.CSSOffset*/this.state.className} /*"recording-margin "*/>
                <div className="recording"  onClick={this.toggleFullScreen}>
                    <a>
                        <img src={this.props.imgSrc} alt={this.props.title}/>
                        <div className="recTileText">
                            <p className="recTileArtist">{this.props.artist}</p>
                            <p className="recTileTitle">{this.props.title}</p>
                            <p className="recTileYear">{this.props.year}</p>
                        </div>
                    </a>
                    {ReactDOM.createPortal( modal, modalRoot)} 
                </div>
            </div>
         );
    }
}
 
export default Recording;