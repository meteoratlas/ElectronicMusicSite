import React from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";
import AnimatedHeadline from "./AnimatedHeadline";

const RecordingModal = (props) => {
    const divStyle = {
        background:
            " linear-gradient(to left, rgba(0,0,0,0.33) 0%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%), url(" +
            process.env.PUBLIC_URL +
            "/img/" +
            props.image +
            ")",
        backgroundSize: "100%",
    };
    return (
        <Modal
            centered
            show={props.show}
            onHide={props.close}
            dialogClassName="modal-90w"
        >
            <Modal.Header closeButton></Modal.Header>
            <div className="modal-popup" style={divStyle}>
                <div className="modal-container ">
                    <div className="modal-titles">
                        <AnimatedHeadline
                            headline={props.artist}
                            headSize="h1"
                        ></AnimatedHeadline>
                        <AnimatedHeadline
                            headline={props.title}
                            headSize="h2"
                        ></AnimatedHeadline>
                        <h3>{props.year}</h3>
                        <hr />
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <p className="rec-description">
                                    {props.description}
                                </p>
                            </Col>
                            <Col>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        class="embed-responsive-item"
                                        title="YouTube Video"
                                        width="560"
                                        height="315"
                                        src={props.youtube}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Modal>
    );
};

export default RecordingModal;
