import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

const projectContent = 'project-content';

const ProjectContent = ({ type, title, text, images, highlightColor }) => {

    const renderTextImageContent = () => {
        return (
            <React.Fragment>
                <div className={`${projectContent}__text-highlight-container`}>
                    <div className={`${projectContent}__highlight`}
                        style={{
                            backgroundColor: highlightColor ? highlightColor : "#FBB844"
                        }} />
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
                                        style={{
                                            maxWidth: image.maxWidth ? image.maxWidth : "100%"
                                        }}
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
            </React.Fragment>
        )
    }

    const renderGalleryContent = () => {
        return (
            <React.Fragment>
                <div className={`${projectContent}__gallery-container`}>
                    {
                        images.map(image => {
                            return (
                                <React.Fragment>
                                    <img className={`${projectContent}__gallery-image`}
                                        src={require(`../assets/${image.src}.png`)}
                                        alt={image.alt_text} />
                                    {
                                        image.src_mobile ?
                                            <img className={`${projectContent}__gallery-image-mobile`}
                                                src={require(`../assets/${image.src_mobile}.png`)}
                                                alt={image.alt_text} />
                                            : null
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className={`${projectContent}`}>
            {
                type === 'textAndImage' ?
                    renderTextImageContent()
                    :
                    null
            }
            {
                type === 'gallery' ?
                    renderGalleryContent()
                    :
                    null
            }
        </div>
    );

};

ProjectContent.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
    highlightColor: PropTypes.string,
}

export default memo(ProjectContent);