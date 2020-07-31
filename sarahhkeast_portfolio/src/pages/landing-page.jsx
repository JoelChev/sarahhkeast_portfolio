import React, { Component } from 'react';
import classnames from 'classnames';

import { EMAIL, LINKEDIN, DRIBBBLE } from '../constants/contact';

import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCard from '../components/project-card';
import ContactItem from '../components/contact-item';

import Projects from '../constants/projects.json';

import HeroFlowers from '../assets/landing/hero_flowers.png';
import Mail from '../assets/mail.svg';
import LinkedIn from '../assets/linkedin.svg';
import Dribbble from '../assets/dribbble.svg';
import ArrowRightBlue from '../assets/arrow-right-blue.svg';
import Yokko from '../assets/landing/yokko-home-page.png';
import YokkoSmall from '../assets/landing/yokko-home-page-mobile.png';

const landingPage = 'landingPage';

class LandingPage extends Component {

    state = {
        highLightedProject: null,
        leavingHighlight: null
    }

    handleProjectMouseEnter = (projectId) => {
        this.setState({ highLightedProject: projectId });
    }

    handleProjectMouseLeave = (projectId) => {
        this.setState({ leavingHighlight: projectId });
        setTimeout(() => {
            this.setState({ highLightedProject: null });
            this.setState({ leavingHighlight: null });
        }, 201);
    }

    renderProjectCards() {
        const { highLightedProject, leavingHighlight } = this.state;
        const { projects } = Projects;
        return projects.map((project, index) => {
            const { landing } = project;
            return (
                <ProjectCard
                    key={`projectCard-${index}`}
                    id={index}
                    title={landing.title}
                    subTitle={landing.subTitle}
                    highLightedProject={highLightedProject}
                    leavingHighlight={leavingHighlight}
                    handleProjectMouseEnter={this.handleProjectMouseEnter}
                    handleProjectMouseLeave={this.handleProjectMouseLeave}
                    images={landing.images} />
            );
        });
    }

    render() {
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
                    {
                        this.renderProjectCards()
                    }
                </div>
                <div className={`${landingPage}__question-contact-container`}>
                    <div className={`${landingPage}__question-container`}>
                        <div className={`${landingPage}__question-alignment-container`}>
                            <h3 className={`${landingPage}__question-text`}>Any questions?</h3>
                            <h3 className={`${landingPage}__question-text`}>Happy to help!</h3>
                        </div>
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