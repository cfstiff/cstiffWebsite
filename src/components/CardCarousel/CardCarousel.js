import React, { Component } from "react";
import Slider from "react-slick";
import ImageCard from "../ImageCard/ImageCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.css";

class CardCarousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settings = {
            arrows: true,
            dots: true,
            className: "slides",
            focusOnSelect: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            variableWidth: true
        };
        return (
            <div className="CardCarousel">
                This is the carousel
                <Slider {...settings}>
                    <div class="SleepDepBuddy" style={{ width: 300 }}>
                        {ImageCard(
                            "http://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/YOOC6J5VBJCXRGGXHQ56UHYXGU.jpg",
                            "SleepDepBuddy",
                            "MuddHacks 2017 2nd Prize Winner. A small desktop pet that used light levels to determine how often users were sleeping.",
                            "Button"
                        )}
                    </div>
                    <div class="ConnectedCloud" style={{ width: 300 }}>
                        {ImageCard(
                            "http://eaposs.com/cloud.jpg",
                            "Connected Cloud Lamp",
                            "A WiFi connected cloud lamp, which changed colors and patterns based on live weather data.",
                            "Button"
                        )}
                    </div>
                    <div className="HomeAway" style={{ width: 300 }}>
                        {ImageCard(
                            "https://www.homeaway.com/platform/images/birdhouses.png",
                            "HomeAway Internship",
                            "Summer 2018 Intership at Homeaway, working on the Search page",
                            "Button"
                        )}
                    </div>
                    <div className="Research" style={{ width: 300 }}>
                        {ImageCard(
                            "./src/goodStreet.png",
                            "Research",
                            "Research at Harvey Mudd College, using image processing on Google StreetView Images",
                            "Button"
                        )}
                    </div>
                    <div className="CTFBot" style={{ width: 300 }}>
                        {ImageCard(
                            "http://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/YOOC6J5VBJCXRGGXHQ56UHYXGU.jpg",
                            "Capture the Flag Robot",
                            "Robot that used line following algorithms and gold code detection to capture 'flags' by hitting bumpers",
                            "Button"
                        )}
                    </div>
                </Slider>
            </div>
        );
    }
}

export default CardCarousel;
