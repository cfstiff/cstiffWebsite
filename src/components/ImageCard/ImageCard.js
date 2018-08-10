import React, { Component } from "react";
import "./ImageCard.less";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";

export default function ImageCard(image, title, text, buttonText) {
    return (
        <Card>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>

                <CardText>{text}</CardText>
                <Button>{buttonText}</Button>
            </CardBody>
        </Card>
    );
}
