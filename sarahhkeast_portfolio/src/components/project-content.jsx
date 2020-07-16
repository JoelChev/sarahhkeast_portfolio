import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

const projectContent = 'project-content';

const ProjectContent = ({ title, text, images }) => (

    <div className={`${projectContent}`}>
        <div className={`${projectContent}__text-highlight-container`}>
            <div className={`${projectContent}__highlight`} />
            <div className={`${projectContent}__text-container`}>
                <h4 className={`${projectContent}__title`}>{title}</h4>
                <span className={`${projectContent}__text`}>{text}</span>
            </div>
        </div>
        <div className={`${projectContent}__content-images`}>
            {
                images.map((image, index) => {
                    return (
                        <React.Fragment>
                            <img key={`${title}-img-${index}`}
                                className={classnames(`${projectContent}__image`, !image.src_mobile ? `${projectContent}__image--show-mobile` : '')}
                                src={require(`../assets/${image.src}.png`)}
                                alt={image.alt_text} />
                            {
                                image.src_mobile ?
                                    <img key={`${title}-img-${index}`}
                                        className={`${projectContent}__image-mobile`}
                                        src={require(`../assets/${image.src_mobile}.png`)}
                                        alt={image.alt_text} />
                                    : null
                            }

                        </React.Fragment>
                    )
                })
            }
        </div>
    </div>
);

ProjectContent.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
}

export default memo(ProjectContent);