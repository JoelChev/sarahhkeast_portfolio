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
import Figma from '../assets/figma.svg';
import LinkWhite from '../assets/link-white.svg';

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
                    <div className={`${landingPage}__under-construction-container`}>
                        <h2 className={`${landingPage}__under-construction-title`}>Portfolio Under Construction!</h2>
                        <p className={`${landingPage}__under-construction-text`}>
                            A lot of great things have happened over the past year. To see my most up to date work, click the link below!</p>
                        <p className={`${landingPage}__under-construction-mobile-warning-text`}>* Link can only be viewed on a Desktop *</p>
                        <a className={`${landingPage}__figma-case-studies-link`}
                            href='/' target="_blank" rel="noopener noreferrer">
                            <img className={`${landingPage}__figma-case-logo`}
                                src={Figma}
                                alt="Sarah's Case Studies Link" />
                            <span className={`${landingPage}__figma-case-text`}>Sarah's Case Studies</span>
                            <img className={`${landingPage}__figma-link-image`}
                                src={LinkWhite}
                                alt="Sarah's Case Studies Link" />
                        </a>
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