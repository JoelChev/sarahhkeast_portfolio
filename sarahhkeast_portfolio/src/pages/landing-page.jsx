import React, { Component } from 'react';
import classnames from 'classnames';

import { EMAIL, LINKEDIN, DRIBBBLE } from '../constants/contact';

import Header from '../components/header';
import Footer from '../components/footer';
import ContactItem from '../components/contact-item';

import HeroFlowers from '../assets/hero_flowers.png';
import Mail from '../assets/mail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Dribbble from '../assets/dribbble.svg';
import ArrowRightBlue from '../assets/arrow-right-blue.svg';
import Yokko from '../assets/yokko-home-page.png';

const landingPage = 'landingPage';

class LandingPage extends Component {

    state = {
        highLightedProject: null
    }

    handleProjectMouseEnter(projectId) {
        this.setState({ highLightedProject: projectId });
    }

    handleProjectMouseLeave() {
        this.setState({ highLightedProject: null });
    }

    render() {
        const { highLightedProject } = this.state;
        return (
            <div className={`${landingPage}`}>
                <Header />
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
                    <a className={`${landingPage}__project-card-container`}
                        href="/project"
                        onMouseEnter={() => this.handleProjectMouseEnter(0)}
                        onMouseLeave={() => this.handleProjectMouseLeave()}
                        id='project-0'>
                        <div className={`${landingPage}__project-text-container`}>
                            <div className={`${landingPage}__project-title-container`}>
                                {
                                    highLightedProject === 0 ?
                                        <div className={`${landingPage}__project-card-highlight`} />
                                        : null
                                }
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
                        <div className={`${landingPage}__contact-alignment-container`}>
                            <ContactItem image={Mail} alt_text='mail-icon' text={EMAIL} url={`mailto:${EMAIL}`} />
                            <ContactItem image={LinkedIn} alt_text='linkedin-icon' text='Sarah Keast' url={LINKEDIN} />
                            <ContactItem image={Dribbble} alt_text='dribbble-icon' text='Sarah Keast' url={DRIBBBLE} />
                        </div>
                    </div>
                </div>
                <Footer isDark={false} showIcons={false} />
            </div>
        )
    }

}
export default LandingPage;