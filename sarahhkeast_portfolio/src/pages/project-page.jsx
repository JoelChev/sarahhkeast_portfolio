import React, { Component } from 'react';
import classnames from 'classnames';

import Footer from '../components/footer';
import Header from '../components/header';
import ProjectHeading from '../components/project-heading';
import ProjectDescription from '../components/project-description';
import ProjectContent from '../components/project-content';

import Projects from '../constants/projects.json';

import ArrowLeftBlue from '../assets/arrow-left-blue.svg';
import YokkoBanner from '../assets/yokko/yokko-banner.png';
import YokkoBannerSmall from '../assets/yokko/yokko-banner-mobile.png';
import ArrowRightBlack from '../assets/arrow-right-black.svg';
import MovemberNextProject from '../assets/movember-next-project.png';

const projectPage = 'projectPage';

class ProjectPage extends Component {

    renderProjectHeading() {
        const { projects } = Projects;
        const { projectId } = this.props.match.params;
        const { heading } = projects[projectId];
        return (
            <ProjectHeading
                title={heading.title}
                subTitle={heading.subTitle}
                backgroundColor={heading.backgroundColor} />
        )
    }

    renderProjectDescription() {
        const { projects } = Projects;
        const { projectId } = this.props.match.params;
        const { description } = projects[projectId];
        return (
            <ProjectDescription
                text={description.text}
                tools={description.tools}
                date={description.date} />
        );
    }

    renderProjectContent() {
        const { projects } = Projects;
        const { projectId } = this.props.match.params;
        return projects[projectId].content.map((contentItem, index) => {
            return (
                <ProjectContent
                    key={`contentItem-${index}`}
                    type={contentItem.type}
                    title={contentItem.title}
                    text={contentItem.text}
                    images={contentItem.images} />
            );
        });
    }

    render() {
        const { projects } = Projects;
        const { projectId } = this.props.match.params;
        const { contentType } = projects[projectId];
        //This makes a circular next-index.
        const nextProjectId = (projects.length - (projectId + 1)) % (projects.length + 1);
        return (
            <div className={`${projectPage}`}>
                <Header />
                <div className={`${projectPage}__header`}>
                    <div className={`${projectPage}__back-link-container`}>
                        <a className={`${projectPage}__back-link`} href={`/#project-${projectId}`}>
                            <img className={`${projectPage}__back-link-icon`} src={ArrowLeftBlue} />
                            <span className={`${projectPage}__back-link-text`}>Back</span>
                        </a>
                    </div>
                    {
                        this.renderProjectHeading()
                    }
                    {
                        this.renderProjectDescription()
                    }
                    <div className={classnames(`${projectPage}__content-container`, contentType === "gallery" ?
                        `${projectPage}__content-container--gallery` : '')}>
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
                            <img className={`${projectPage}__banner-image-mobile`} src={YokkoBannerSmall} alt="Yokko Banner Image" />
                        </div>
                    </div>
                    <div className={`${projectPage}__next-project-container`}>
                        <div className={`${projectPage}__next-project-title-container`}>
                            <div className={`${projectPage}__next-project-title-wrapper`}>
                                <span className={`${projectPage}__next-project-text`}>Up Next</span>
                                <h4 className={`${projectPage}__next-project-title`}>Movember Project</h4>
                                <div className={`${projectPage}__next-project-link-container`}>
                                    <a className={`${projectPage}__next-project-link`}
                                        href={`/project/${nextProjectId}`}>
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