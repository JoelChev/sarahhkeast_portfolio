import React, { Component } from 'react';
import classnames from 'classnames';

import { EMAIL, LINKEDIN, DRIBBBLE } from '../constants/contact';

import Header from '../components/header';
import Footer from '../components/footer';

import AboutSarah from '../assets/about_sarah.png';
import MailBlue from '../assets/mail-blue.svg';
import LinkedInBlue from '../assets/linkedin-blue.svg';
import DribbbleBlue from '../assets/dribbble-blue.svg';
import LinkBlue from '../assets/link-blue.svg';

const aboutPage = 'aboutPage';

class AboutPage extends Component {

    render() {
        return (
            <div className={`${aboutPage}`}>
                <Header />
                <div className={`${aboutPage}__content-container`}>
                    <div className={`${aboutPage}__text-container`}>
                        <h1 className={`${aboutPage}__title`}>Hi, I'm <span className={classnames(`${aboutPage}__title`, `${aboutPage}__title--highlight`)}>Sarah -</span></h1>
                        <p className={`${aboutPage}__text`}>Since the day that I can remember, I have always found ways to express my creativity. Whether it be colouring the walls when I was five, to painting on people when I was twenty, I have always had a passion for bringing my ideas to life. My creativity is a large portion of who I am, and this carries through in every project I encounter. <br /><br />
                        I am currently an Experience Designer at Konrad Group and have been with the company since June 2018. I have worked on various projects for clients such as Deloitte, Tweed, and CF (Cadillac Fairview). I have also made significant contributions to the social culture of Konrad Group, hosting paint nights and smaller design power hours for my colleagues. <br /><br />
                        I graduated with a Bachelor of Design from York University / Sheridan College in June 2018. Being apart of YSDN (York Sheridan Design) has taught me more about myself and has shown me my place in the world. My interpersonal skills, as well as my ability to build a stronger connection with those involved in my designs will forever be strengthened by what this program has taught me. <br /><br />
                        When I am not working, you can find me at the AGO drawing on my iPad. I love visiting the gallery whenever I can. I also enjoy travelling, taking photos and meeting new creatives. <br /><br />
                        In anything you do, you should always keep your passions close. My ability to think outside the box and find meaning within has brought out my best when approaching any project.</p>
                    </div>
                    <div className={`${aboutPage}__image-container`}>
                        <img className={`${aboutPage}__image`}
                            src={AboutSarah}
                            alt="Sarah Keast" />
                    </div>
                </div>
                <div className={`${aboutPage}__contact-resume-container`}>
                    <div className={`${aboutPage}__contact-container`}>
                        <h4 className={`${aboutPage}__contact-title`}>
                            Contact
                        </h4>
                        <a className={`${aboutPage}__contact-item`}
                            href={`mailto:${EMAIL}`}>
                            <img className={`${aboutPage}__contact-image`}
                                src={MailBlue}
                                alt="Email" />
                            <span className={`${aboutPage}__contact-text`}>{EMAIL}</span>
                        </a>
                        <a className={`${aboutPage}__contact-item`}
                            href={LINKEDIN}
                            target="_blank" rel="noopener noreferrer">
                            <img className={`${aboutPage}__contact-image`}
                                src={LinkedInBlue}
                                alt="LinkedIn" />
                            <span className={`${aboutPage}__contact-text`}>Sarah Keast</span>
                        </a>
                        <a className={`${aboutPage}__contact-item`}
                            href={DRIBBBLE}
                            target="_blank" rel="noopener noreferrer">
                            <img className={`${aboutPage}__contact-image`}
                                src={DribbbleBlue}
                                alt="Dribbble" />
                            <span className={`${aboutPage}__contact-text`}>Sarah Keast</span>
                        </a>
                    </div>
                    <div className={`${aboutPage}__resume-container`}>
                        <h4 className={`${aboutPage}__resume-title`}>
                            Resumé
                        </h4>
                        <a className={`${aboutPage}__resume-item`}
                            target="_blank" rel="noopener noreferrer">
                            <span className={`${aboutPage}__resume-text`}>Sarah Keast Resumé</span>
                            <img className={`${aboutPage}__resume-image`}
                                src={LinkBlue}
                                alt="Resumé" />
                        </a>
                    </div>
                </div>
                <Footer isDark={false} showIcons={false} />
            </div>
        )
    }

}
export default AboutPage;