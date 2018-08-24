import React, { Component } from "react";
import Slider from "react-slick";
import ImageCard from "../ImageCard/ImageCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.css";

class CardCarousel extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            className: "slides",
            focusOnSelect: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        dots: true
                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="CardCarousel">
                This is the carousel
                <Slider {...settings}>
                    <div class="SleepDepBuddy" style={{ width: 300 }}>
                        {ImageCard(
                            "muddhacksProject.jpg",
                            "SleepDepBuddy",
                            "MuddHacks 2017 2nd Prize Winner. A small desktop pet that used light levels to determine how often users were sleeping.",
                            "More "
                        )}
                    </div>
                    <div class="ConnectedCloud" style={{ width: 300 }}>
                        {ImageCard(
                            "cloudLamp.jpg",
                            "Connected Cloud Lamp",
                            "A WiFi connected cloud lamp, which changed colors and patterns based on live weather data.",
                            "More"
                        )}
                    </div>
                    <div className="HomeAway" style={{ width: 300 }}>
                        {ImageCard(
                            "https://www.homeaway.com/platform/images/birdhouses.png",
                            "HomeAway Internship",
                            "Summer 2018 Internship at Homeaway, working on the Search page",
                            "More"
                        )}
                    </div>
                    <div className="Research" style={{ width: 300 }}>
                        {ImageCard(
                            "goodStreet.png",
                            "Research",
                            "Research at Harvey Mudd College, using image processing on Google StreetView Images",
                            "More"
                        )}
                    </div>
                    <div className="CTFBot" style={{ width: 300 }}>
                        {ImageCard(
                            "ctfBot.png",
                            "Capture the Flag Robot",
                            "Robot that used line following algorithms and gold code detection to capture 'flags' by hitting bumpers",
                            "More"
                        )}
                    </div>
                </Slider>
            </div>
        );
    }
}

export default CardCarousel;
