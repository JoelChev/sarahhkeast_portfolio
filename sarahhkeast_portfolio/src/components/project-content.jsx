import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

const projectContent = 'project-content';

const ProjectContent = ({ type, title, text, textColor, images, highlightColor, backgroundColor }) => {

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

    const renderScreenGalleryContent = () => {
        return (
            <React.Fragment>
                <div className={`${projectContent}__screen-gallery-container`}
                    style={{
                        backgroundColor: backgroundColor ? backgroundColor : 'white'
                    }}>
                    <div className={`${projectContent}__screen-text-container`}>
                        <h4 className={`${projectContent}__screen-title`}>
                            {title}
                        </h4>
                        <span className={`${projectContent}__screen-text`}>
                            {text}
                        </span>
                        <div className={`${projectContent}__images`}>
                            {
                                images.map((image, index) => {
                                    return (
                                        <React.Fragment>
                                            <img key={`${title}-img-${index}`}
                                                className={classnames(`${projectContent}__screen-image`, !image.src_mobile ? `${projectContent}__screen-image--show-mobile` : '')}
                                                src={require(`../assets/${image.src}.png`)}
                                                alt={image.alt_text} />
                                            {
                                                image.src_mobile ?
                                                    <img key={`${title}-img-${index}`}
                                                        className={`${projectContent}__screen-image-mobile`}
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
            {
                type === 'screen-gallery' ?
                    renderScreenGalleryContent()
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
    textColor: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
    highlightColor: PropTypes.string,
    backgroundColor: PropTypes.string,
}

export default memo(ProjectContent);