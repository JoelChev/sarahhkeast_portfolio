import React, { Component } from 'react';
import classnames from 'classnames';

import Header from '../components/header.jsx';

import ArrowLeftBlue from '../assets/arrow-left-blue.svg';

const projectPage = 'projectPage';

class ProjectPage extends Component {

    render() {
        return (
            <div className={`${projectPage}`}>
                <Header />
                <div className={`${projectPage}__header`}>
                    <div className={`${projectPage}__back-link-container`}>
                        <a className={`${projectPage}__back-link`} href='/#project-0'>
                            <img className={`${projectPage}__back-link-icon`} src={ArrowLeftBlue} />
                            <span>Back</span>
                        </a>
                    </div>
                    <div className={`${projectPage}__hero-container`}>
                        <div className={`${projectPage}__hero-text-container`}>
                            <div className={`${projectPage}__hero-title-container`}>
                                <div className={`${projectPage}__hero-title-align-container`}>
                                    <h2 className={`${projectPage}__hero-title`}>Meet Yokko.</h2>
                                    <h2 className={`${projectPage}__hero-sub-title`}>UX/UI</h2>
                                </div>
                            </div>
                        </div>
                        <div className={`${projectPage}__hero-image-container`} />
                    </div>
                    <div className={`${projectPage}__information-container`}>
                        <div className={`${projectPage}__description-container`}>
                            <h4 className={`${projectPage}__description-title`}>Project</h4>
                            <p className={`${projectPage}__description-text`}>The connection between a mother and a baby begins from the moment of conception. With the mobile application Yokko, women are able to better connect with their children throughout their journey as one. Yokko enables parents carefully monitor their baby’s development without having to leverage medical personnel. </p>
                        </div>
                        <div className={`${projectPage}__tool-date-container`}>
                            <div className={`${projectPage}__tools-container`}>
                                <h4 className={`${projectPage}__tools-title`}>Tools Used</h4>
                                <span className={`${projectPage}__tools-text`}>Sketch</span>
                                <span className={`${projectPage}__tools-text`}>Principle</span>
                            </div>
                            <div className={`${projectPage}__date-container`}>
                                <h4 className={`${projectPage}__date-title`}>Date</h4>
                                <span className={`${projectPage}__date-text`}>January 2018</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default ProjectPage;