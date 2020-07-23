import React, { memo } from 'react';
import PropTypes from "prop-types";

import ArrowRightBlue from '../assets/arrow-right-blue.svg';

const projectCard = 'project-card';

const ProjectCard = ({ id, title, subTitle, highLightedProject,
    handleProjectMouseEnter, handleProjectMouseLeave, images }) => (

        <a className={`${projectCard}`}
            href={`/project/${id}`}
            onMouseEnter={() => handleProjectMouseEnter(id)}
            onMouseLeave={() => handleProjectMouseLeave()}
            id={`project-${id}`}>
            <div className={`${projectCard}__text-container`}>
                <div className={`${projectCard}__title-container`}>
                    {
                        highLightedProject === id ?
                            <div className={`${projectCard}__highlight`} />
                            : null
                    }
                    <div className={`${projectCard}__title-align-container`}>
                        <h4 className={`${projectCard}__title`}>{title}</h4>
                        <h4 className={`${projectCard}__sub-title`}>{subTitle}</h4>
                    </div>
                    <img className={`${projectCard}__title-arrow`}
                        src={ArrowRightBlue}
                        alt='Project Title Arrow' />
                </div>
            </div>

            <div className={`${projectCard}__image-container`}>
                <img className={`${projectCard}__image`}
                    src={require(`../assets/landing/${images.src}.png`)}
                    alt={`Project ${title} image`} />
                <img className={`${projectCard}__image-mobile`}
                    src={require(`../assets/landing/${images.src_mobile}.png`)}
                    alt={`Project ${title} image`} />
            </div>
        </a>
    );

ProjectCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    highLightedProject: PropTypes.bool,
    handleProjectMouseEnter: PropTypes.func,
    handleProjectMouseLeave: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.object),
}

export default memo(ProjectCard);

