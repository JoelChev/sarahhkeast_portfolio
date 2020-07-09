import React, { Component } from 'react';
import classnames from 'classnames';

import HeroFlowers from '../assets/hero_flowers.png';
import Mail from '../assets/mail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Dribbble from '../assets/dribbble.svg';

const landingPage = 'landingPage';

class LandingPage extends Component {

    state = {
        isTop: true
    }

    handleScroll = (event) => {
        console.log("Yo");
        const { isTop } = this.state;
        console.log(isTop);
        console.log(window.scrollY);
        if (window.scrollY === 0 && !isTop) {
            this.setState({ isTop: true });
        } else if (window.scrollY !== 0 && isTop) {
            this.setState({ isTop: false });
        }
    }

    componentDidMount() {
        this.setState({ isTop: window.pageYOffset === 0 })
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isTop } = this.state;
        return (
            <div className={`${landingPage}`}>
                <div className={classnames(`${landingPage}__header`, !isTop ? `${landingPage}__header--white` : '')} id='header'>
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
                <div className={`${landingPage}__question-contact-container`}>
                    <div className={`${landingPage}__question-container`}>
                        <h3 className={`${landingPage}__question-text`}>Any questions?</h3>
                        <h3 className={`${landingPage}__question-text`}>Happy to help!</h3>
                    </div>
                    <div className={`${landingPage}__contact-container`}>
                        <div className={`${landingPage}__contact-item`}>
                            <img className={`${landingPage}__contact-image`}
                                src={Mail}
                                alt="mail-icon"></img>
                            <span className={`${landingPage}__contact-text`}>sarah.keast1@gmail.com</span>
                        </div>
                        <div className={`${landingPage}__contact-item`}>
                            <img className={`${landingPage}__contact-image`}
                                src={LinkedIn}
                                alt="linkedin-icon"></img>
                            <span className={`${landingPage}__contact-text`}>Sarah Keast</span>
                        </div>
                        <div className={`${landingPage}__contact-item`}>
                            <img className={`${landingPage}__contact-image`}
                                src={Dribbble}
                                alt="dribbble-icon"></img>
                            <span className={`${landingPage}__contact-text`}>Sarah Keast</span>
                        </div>
                    </div>
                </div>
                <div className={`${landingPage}__footer`}>
                    <div className={`${landingPage}__footer-wrapper`}>
                        <span className={`${landingPage}__copyright-text`}>Sarah Keast 2020</span>
                    </div>
                    <div className={`${landingPage}__footer-spacer`}>

                    </div>
                </div>
            </div>
        )
    }

}
export default LandingPage;