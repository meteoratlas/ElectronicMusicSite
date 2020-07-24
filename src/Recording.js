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
        //this.CSSOffset = "recording-margin data-offset=" + this.props.offset;
    }

    componentDidMount() {
        // const animated = document.querySelector(".recording-margin");
        // animated.addEventListener("animationcancel", () => {
        //     console.log("Animation cancel");
        // });
    }

    render() {
        return (
            <Card className="mt-10" bg={"dark"} onClick={this.props.clicked}>
                <Card.Img variant="top" src={this.props.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.artist}</Card.Title>
                    <Card.Text>{this.props.title}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        );
    }
}

export default Recording;
