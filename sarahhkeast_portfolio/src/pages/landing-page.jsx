import React, { Component } from 'react';
import classnames from 'classnames';

import HeroFlowers from '../assets/hero_flowers.png';
import Mail from '../assets/mail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Dribbble from '../assets/dribbble.svg';
import ArrowRightBlue from '../assets/arrow-right-blue.svg';
import Yokko1 from '../assets/Yokko 1.png';
import Yokko2 from '../assets/Yokko 2.png';

const landingPage = 'landingPage';

class LandingPage extends Component {

    render() {
        return (
            <div className={`${landingPage}`}>
                <div className={`${landingPage}__header`}>
                    <div className={`${landingPage}__header-text-container`}>
                        <span className={`${landingPage}__header-name`}>Sarah Keast</span>
                        <span className={`${landingPage}__header-about`}>About</span>
                    </div>
                    <div className={`${landingPage}__header-space-container`}>

                    </div>
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
                <div className={`${landingPage}__project-list-container`}>
                    <div className={`${landingPage}__project-list-title-container`}>
                        <h2 className={`${landingPage}__project-list-title`}>Work</h2>
                        <div className={`${landingPage}__project-list-spacer`}></div>
                    </div>
                    <div className={`${landingPage}__project-card-container`}>
                        <div className={`${landingPage}__project-text-container`}>
                            <div className={`${landingPage}__project-title-container`}>
                                <div className={`${landingPage}__project-title-align-container`}>
                                    <h4 className={`${landingPage}__project-title`}>Yokko</h4>
                                    <h4 className={`${landingPage}__project-sub-title`}>UX/UI</h4>
                                </div>
                                <img className={`${landingPage}__project-title-arrow`}
                                    src={ArrowRightBlue}
                                    alt='project-title-arrow' />
                            </div>
                        </div>
                        <div className={`${landingPage}__project-image-container`}>
                            <img className={`${landingPage}__project-image-one`} src={Yokko1} alt='project image one' />
                            <img className={`${landingPage}__project-image-two`} src={Yokko2} alt='project image one' />
                        </div>
                    </div>

                </div>
                <div className={`${landingPage}__question-contact-container`}>
                    <div className={`${landingPage}__question-container`}>
                        <h3 className={`${landingPage}__question-text`}>Any questions?</h3>
                        <h3 className={`${landingPage}__question-text`}>Happy to help!</h3>
                    </div>
                    <div className={`${landingPage}__contact-container`}>
                        <div classname={`${landingPage}__contact-alignment-container`}>
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