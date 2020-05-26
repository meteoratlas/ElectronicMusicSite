import React, { Component } from 'react';

class AnimatedHeadline extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "", index: 0 }
        this.trueChars = 0;
    }
    render() { 
        return ( <this.props.headSize>{this.state.text}</this.props.headSize> );
    }

    componentDidMount() {
        // TODO: may need to activate the setinterval elsewhere (particularly if we want the headline to animate each time we bring up the modal description window.)
        this.timerID = setInterval(
            () => this.animateNextChar(), 50
          );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    

    animateNextChar(){

        let txt = "";
        //let characters = "BCDFGHJKLMNRSTVWXYZ0123456789!@#$%^&*()<>+=░▒▓▖▗▘▙▚▛▜▞▟🞛⬚⬛◩◳◲◱◰▦";
        //let characters = "░▒▓";
        let characters = "BCDFGHJKLMNRSTVWXYZ0123456789";

        // We've already rendered every correct character in the headline
        if (this.trueChars > this.props.headline.length){
            clearInterval(this.timerID);
            return;
        }
        
        for (var i = 0; i < this.trueChars; i++){
            txt += this.props.headline.charAt(i);
        }

        for (var j = this.trueChars; j < this.props.headline.length; j++) {
            let randChar = characters.charAt(Math.floor(Math.random() * characters.length));
            txt += randChar;
        }
        this.trueChars++;
        this.setState({text: txt});
    }

    
}
 
export default AnimatedHeadline;