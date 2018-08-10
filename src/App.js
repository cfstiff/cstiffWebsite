import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
    Jumbotron,
    Container,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

import CardCarousel from "./components/CardCarousel/CardCarousel";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.handleLearnMore = this.handleLearnMore.bind(this);
    }
    handleLearnMore() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="App">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">
                            This is a simple hero unit, a simple Jumbotron-style
                            component for calling extra attention to featured
                            content or information.
                        </p>
                        <hr className="my-2" />
                        <p>
                            It uses utility classes for typography and spacing
                            to space content out within the larger container.
                        </p>
                        <p className="lead">
                            <Button
                                color="primary"
                                onClick={this.handleLearnMore}
                            >
                                Learn More
                            </Button>
                        </p>
                    </Container>
                </Jumbotron>
                <p> This is some information about me </p>
                <CardCarousel />

                <Modal isOpen={this.state.modal} toggle={this.handleLearnMore}>
                    <ModalHeader toggle={this.handleLearnMore}>
                        {" "}
                        Modal title{" "}
                    </ModalHeader>
                    <ModalBody> This is a modal</ModalBody>
                </Modal>
            </div>
        );
    }
}

export default App;
