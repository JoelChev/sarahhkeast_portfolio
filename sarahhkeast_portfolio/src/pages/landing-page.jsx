import React, { Component } from 'react';

import HeroFlowers from '../assets/hero_flowers.png'

const landingPage = 'landingPage';

class LandingPage extends Component {

    render() {
        return (
            <div className={`${landingPage}`}>
                <div className={`${landingPage}__header`}>
                    <span className={`${landingPage}__header-name`}>Sarah Keast</span>
                    <span className={`${landingPage}__header-about`}>About</span>
                </div>
                <div className={`${landingPage}__hero`}>
                    <div className={`${landingPage}__text-container`}>
                        <div className={`${landingPage}__text-align-container`}>
                            <h2 className={`${landingPage}__title`}>Sarah Keast</h2>
                            <h3 className={`${landingPage}__subtitle`}>Creator, Dreamer & Friend.</h3>
                            <h3 className={`${landingPage}__sub-text`}>Welcome to my portfolio.</h3>
                        </div>
                    </div>
                    <div className={`${landingPage}__image-container`}>
                        <img className={`${landingPage}__image-hero`}
                            src={HeroFlowers} alt="Sarah Hero Flowers" />
                    </div>

                </div>
            </div>
        )
    }

}
export default LandingPage;