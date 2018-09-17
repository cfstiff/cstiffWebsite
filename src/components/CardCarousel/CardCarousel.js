import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import ImageCard from "../ImageCard/ImageCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.css";

class CardCarousel extends Component {
    render() {
        const settings = {
            arrows: true,
            autoplay: !this.props.modalOpen,
            dots: true,
            className: "slides",
            infinite: true,
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
                <h2> Projects </h2>
                <Slider {...settings}>
                    <div class="SleepDepBuddy" style={{ width: 300 }}>
                        <ImageCard
                            image="muddhacksProject.jpg"
                            title="SleepDepBuddy"
                            text="MuddHacks 2017 2nd Prize Winner. A small desktop pet that used light levels to determine how often users were sleeping."
                            modalName="sleepDepBuddy"
                        />
                    </div>
                    <div class="ConnectedCloud" style={{ width: 300 }}>
                        <ImageCard
                            image="cloudLamp.jpg"
                            title="Connected Cloud Lamp"
                            text="A WiFi connected cloud lamp, which changed colors and patterns based on live weather data."
                            modalName="cloudLamp"
                        />
                    </div>
                    <div className="HomeAway" style={{ width: 300 }}>
                        <ImageCard
                            image="https://www.homeaway.com/platform/images/birdhouses.png"
                            title="HomeAway Internship"
                            text="Summer 2018 Internship at Homeaway, working on the Search page"
                            modalName="homeaway"
                        />
                    </div>
                    <div className="Website" style={{ width: 300 }}>
                        <ImageCard
                            image="logo.png"
                            title="Personal Website"
                            text="Personal Website, written in React with automatic deployment"
                            modalName="website"
                        />
                    </div>
                    <div className="Research" style={{ width: 300 }}>
                        <ImageCard
                            image="goodStreet.png"
                            title="Research"
                            text="Research at Harvey Mudd College, using image processing on Google StreetView Images"
                            modalName="research"
                        />
                    </div>
                    <div className="CTFBot" style={{ width: 300 }}>
                        <ImageCard
                            image="ctfBot.png"
                            title="Capture the Flag Robot"
                            text="Robot that used line following algorithms and gold code detection to capture 'flags' by hitting bumpers"
                            modalName="ctfBot"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    modalOpen: state.toggleModalReducer.currentModal !== null,
    currentModal: state.toggleModalReducer.currentModal
});

export default connect(mapStateToProps)(CardCarousel);
