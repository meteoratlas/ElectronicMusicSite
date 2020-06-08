import React, { PureComponent } from "react";
import { Card } from "react-bootstrap";

class Recording extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            className: "recording-margin",
        };
        this.portalElement = document.createElement("div");
        this.divStyle = {
            background:
                " linear-gradient(to left, rgba(0,0,0,0.33) 0%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%), url(" +
                props.imgSrc +
                ")",
            backgroundSize: "100%",
        };
        this.handleClick = this.handleClick.bind(this);

        //this.CSSOffset = "recording-margin data-offset=" + this.props.offset;
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => ({
            active: false,
        }));
        let body = document.getElementsByTagName("body")[0];

        if (body.classList.length === 0) {
            body.classList.add("modal-active");
        } else {
            body.classList.remove("modal-active");
        }
    }

    toggleFullScreen = (e) => {
        if (this.state.active) {
            return;
        }

        e.preventDefault();
        this.setState((prevState) => ({
            active: true, //!prevState.active
        }));

        let body = document.getElementsByTagName("body")[0];

        if (body.classList.length === 0) {
            body.classList.add("modal-active");
        } else {
            body.classList.remove("modal-active");
        }
    };

    closeModal = () => {
        console.log("close modal");
        this.setState((prevState) => ({
            active: false,
        }));
    };

    componentDidMount() {
        // const animated = document.querySelector(".recording-margin");
        // animated.addEventListener("animationcancel", () => {
        //     console.log("Animation cancel");
        // });
    }

    render() {
        return (
            <Card
                bg={"dark"}
                style={{
                    width: "20%",
                    fontFamily: "Major Mono Display",
                }}
            >
                <Card.Img variant="top" src={this.props.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.artist}</Card.Title>
                    <Card.Text>{this.props.title}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            // <div
            //     className={
            //         /*this.CSSOffset*/ this.state.className
            //     } /*"recording-margin "*/
            // >
            //     <div className="recording" onClick={this.props.clicked}>
            //         <img src={this.props.imgSrc} alt={this.props.title} />
            //         <div className="recTileText">
            //             <p className="recTileArtist">
            //                 {this.props.artist.toLowerCase()}
            //             </p>
            //             <p className="recTileTitle">
            //                 {this.props.title.toLowerCase()}
            //             </p>
            //             <p className="recTileYear">{this.props.year}</p>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Recording;
