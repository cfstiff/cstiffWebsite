import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../actions/index";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";

class ImageCard extends Component {
    render() {
        return (
            <Card width="100%">
                <CardImg src={this.props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>{this.props.text}</CardText>
                    <Button onClick={this.props.toggleModal}>More Info</Button>
                </CardBody>
            </Card>
        );
    }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleModal: () => {
        dispatch(toggleModal(ownProps.modalName));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageCard);
