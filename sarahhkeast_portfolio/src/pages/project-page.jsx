import React, { Component } from 'react';
import classnames from 'classnames';

import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import ProjectContent from '../components/project-content.jsx';

import Projects from '../constants/projects.json';

import ArrowLeftBlue from '../assets/arrow-left-blue.svg';
import YokkoBanner from '../assets/yokko-banner.png';
import ArrowRightBlack from '../assets/arrow-right-black.svg';
import MovemberNextProject from '../assets/movember-next-project.png';

const projectPage = 'projectPage';

class ProjectPage extends Component {

    renderProjectContent() {
        const { yokko } = Projects;
        return yokko.content.map((contentItem, index) => {
            console.log('Yo');
            console.log(contentItem);
            return (
                <ProjectContent
                    key={`contentItem-${index}`}
                    title={contentItem.title}
                    text={contentItem.text}
                    images={contentItem.images} />
            );
        });
    }

    render() {
        return (
            <div className={`${projectPage}`}>
                <Header />
                <div className={`${projectPage}__header`}>
                    <div className={`${projectPage}__back-link-container`}>
                        <a className={`${projectPage}__back-link`} href='/#project-0'>
                            <img className={`${projectPage}__back-link-icon`} src={ArrowLeftBlue} />
                            <span className={`${projectPage}__back-link-text`}>Back</span>
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
                    <div className={`${projectPage}__content-container`}>
                        {
                            this.renderProjectContent()
                        }
                    </div>
                    <div className={`${projectPage}__banner-container`}>
                        <div className={`${projectPage}__banner-title-container`}>
                            <div className={`${projectPage}__banner-title-wrapper`}>
                                <h4 className={`${projectPage}__banner-title`}>More to come soon.</h4>
                                <span className={`${projectPage}__banner-text`}>Hold on tight. More screens to come!</span>
                            </div>
                        </div>
                        <div className={`${projectPage}__banner-image-container`}>
                            <img className={`${projectPage}__banner-image`} src={YokkoBanner} alt="Yokko Banner Image" />
                        </div>
                    </div>
                    <div className={`${projectPage}__next-project-container`}>
                        <div className={`${projectPage}__next-project-title-container`}>
                            <div className={`${projectPage}__next-project-title-wrapper`}>
                                <span className={`${projectPage}__next-project-text`}>Up Next</span>
                                <h4 className={`${projectPage}__next-project-title`}>Movember Project</h4>
                                <div className={`${projectPage}__next-project-link-container`}>
                                    <a className={`${projectPage}__next-project-link`}
                                        href='/project'>
                                        <span className={`${projectPage}__next-project-link-text`}>Let's Go</span>
                                        <img className={`${projectPage}__next-project-link-image`}
                                            src={ArrowRightBlack}
                                            alt='Next Project Arrow' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${projectPage}__next-project-image-container`}>
                            <img className={`${projectPage}__next-project-image`}
                                src={MovemberNextProject}
                                alt='Movember Project Toucan' />
                        </div>
                    </div>
                    <Footer isDark={true} showIcons={true} />
                </div>
            </div>
        )
    }

}
export default ProjectPage;