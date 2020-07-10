import React, { Component } from 'react';
import classnames from 'classnames';

import ContactItem from '../components/contact-item';

import HeroFlowers from '../assets/hero_flowers.png';
import Mail from '../assets/mail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Dribbble from '../assets/dribbble.svg';
import ArrowRightWhite from '../assets/arrow-right-white.svg';
import ArrowRightBlue from '../assets/arrow-right-blue.svg';
import Yokko from '../assets/yokko-home-page.png';

const landingPage = 'landingPage';

class LandingPage extends Component {


    state = {
        isTop: true
    }

    handleScroll = (event) => {
        const { isTop } = this.state;
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
                <div className={classnames(`${landingPage}__header`, !isTop ? `${landingPage}__header--shadow` : '')}>
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
                    <a className={`${landingPage}__project-card-container`} href="/project">
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
                            <img className={`${landingPage}__project-image`} src={Yokko} alt='project image one' />
                        </div>
                    </a>

                </div>
                <div className={`${landingPage}__question-contact-container`}>
                    <div className={`${landingPage}__question-container`}>
                        <h3 className={`${landingPage}__question-text`}>Any questions?</h3>
                        <h3 className={`${landingPage}__question-text`}>Happy to help!</h3>
                    </div>
                    <div className={`${landingPage}__contact-container`}>
                        <div classname={`${landingPage}__contact-alignment-container`}>
                            <ContactItem image={Mail} alt_text='mail-icon' text='sarah.keast1@gmail.com' url='mailto:sarah.keast1@gmail.com' />
                            <ContactItem image={LinkedIn} alt_text='linkedin-icon' text='Sarah Keast' url='https://www.linkedin.com/in/sarah-keast-68ba27b8/' />
                            <ContactItem image={Dribbble} alt_text='dribbble-icon' text='Sarah Keast' url='https://dribbble.com/sarahkeast' />
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