import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

import ArrowRightBlue from '../assets/arrow-right-blue.svg';

const projectCard = 'project-card';

const ProjectCard = ({ id, title, subTitle, highLightedProject, leavingHighlight,
    handleProjectMouseEnter, handleProjectMouseLeave, images }) => (

        <a className={`${projectCard}`}
            href={`/project/${id}`}
            onMouseEnter={() => handleProjectMouseEnter(id)}
            onMouseLeave={() => handleProjectMouseLeave(id)}
            id={`project-${id}`}>
            <div className={`${projectCard}__text-container`}>
                <div className={`${projectCard}__title-container`}>
                    <div className={`${projectCard}__title-align-container`}>
                        {
                            highLightedProject === id ?
                                <div className={classnames(`${projectCard}__highlight`,
                                    leavingHighlight === id ? `${projectCard}__highlight--hiding` : ''
                                )} />
                                : null
                        }
                        <h4 className={`${projectCard}__title`}>{title}</h4>
                        <h4 className={`${projectCard}__sub-title`}>{subTitle}</h4>
                    </div>
                    <img className={`${projectCard}__title-arrow`}
                        src={ArrowRightBlue}
                        alt='Project Title Arrow' />
                </div>
            </div>

            <div className={`${projectCard}__image-container`}>
                <div className={`${projectCard}__image-background-mobile`} />
                <img className={classnames(`${projectCard}__image`,
                    images.align === 'center' ? `${projectCard}__image--center` : '',
                    images.align === 'right' ? `${projectCard}__image--right` : '')}
                    style={{
                        top: images.top ? images.top : '',
                        left: images.left ? images.left : '',
                        maxHeight: images.maxHeight ? images.maxHeight : '',
                    }}
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
    leavingHighlight: PropTypes.bool,
    handleProjectMouseEnter: PropTypes.func,
    handleProjectMouseLeave: PropTypes.func,
    images: PropTypes.arrayOf(PropTypes.object),
}

export default memo(ProjectCard);

