import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Jumbotron, Container, Button } from "reactstrap";
import store from "./store/index";
import { toggleModal } from "./actions/index";

import CardCarousel from "./components/CardCarousel/CardCarousel";
import ProjectInfoModal from "./components/projectInfoModal/projectInfoModal";

class App extends Component {
    constructor(props) {
        super();

        window.store = store;
        window.toggleModal = toggleModal;

        this.showResume = this.showResume.bind(this);
    }

    showResume() {
        window.open("CStiff_Resume.pdf");
    }
    render() {
        return (
            <div className="App">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Coco Stiff</h1>
                        <p className="lead">
                            Senior at Harvey Mudd College - Computer Science
                            Major - Obsessed with cats
                        </p>
                        <p className="lead">
                            <Button color="primary" onClick={this.showResume}>
                                Resume
                            </Button>
                        </p>
                    </Container>
                </Jumbotron>

                <div className="personalInfo">
                    <h2> About Me </h2>
                    I'm a senior at Harvey Mudd college, with a major in
                    Computer Science and a concentration in Political Science,
                    graduating in May 2019. My main interests lie in front end
                    development and embedded systems - however, at the end of
                    the day, I'm interested in projects that give me the ability
                    to affect and help other people.
                </div>
                <CardCarousel />
                <br />
                <br />
                <div className="contactInfo">
                    <h2> Contact Me </h2>
                    <span>
                        Email: cstiff@hmc.edu
                        <br />
                        Address: 340 E. Foothill Blvd #877, Claremont CA 91711
                        <br />
                        Github: cfstiff
                    </span>
                </div>
                <br />

                <ProjectInfoModal />
            </div>
        );
    }
}

export default connect()(App);
