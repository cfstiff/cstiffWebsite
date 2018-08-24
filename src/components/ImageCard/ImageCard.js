import React from "react";

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
        <Card top width="100%">
            <CardImg src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{title}</CardTitle>

                <CardText>{text}</CardText>
                <Button>{buttonText}</Button>
            </CardBody>
        </Card>
    );
}
