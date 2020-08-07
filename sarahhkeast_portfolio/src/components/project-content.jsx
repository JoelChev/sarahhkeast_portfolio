import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

const projectContent = 'project-content';

const ProjectContent = ({ type, title, titleSize, text, textColor, images, alignMobileImages, mobileImageContent, highlightColor, backgroundColor }) => {

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
                <div className={classnames(`${projectContent}__content-images`,
                    alignMobileImages == 'left' ? `${projectContent}__content-images--left-mobile` : '')}>
                    {
                        images.map((image, index) => {
                            return (
                                <React.Fragment>
                                    {
                                        image.mobile_title ?
                                            <h4 className={`${projectContent}__image-mobile-title`}>{image.mobile_title}</h4>
                                            : null
                                    }
                                    {
                                        image.src ?
                                            <img key={`${title}-img-${index}`}
                                                className={classnames(`${projectContent}__image`, !image.src_mobile ? `${projectContent}__image--show-mobile` : '')}
                                                style={{
                                                    maxWidth: image.maxWidth ? image.maxWidth : "100%"
                                                }}
                                                src={require(`../assets/${image.src}.png`)}
                                                alt={image.alt_text} />
                                            : null
                                    }
                                    {
                                        image.src_mobile ?
                                            <img key={`${title}-img-${index}`}
                                                className={classnames(`${projectContent}__image-mobile`,
                                                    image.mobile_padding_top ? `${projectContent}__image-mobile--padded-top` : '',
                                                    images.length > 1 ? `${projectContent}__image-mobile--large` : '',
                                                    image.mobile_large ? `${projectContent}__image-mobile--large` : '')}
                                                style={{
                                                    maxHeight: image.mobile_max_height ? image.mobile_max_height : ""
                                                }}
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
                    <div className={classnames(`${projectContent}__screen-text-container`,
                        text ? `${projectContent}__screen-text-container--padded-bottom` : '')}>
                        <h4 className={classnames(`${projectContent}__screen-title`,
                            titleSize == 'large' ? `${projectContent}__screen-title--large` : '')}
                            style={{
                                color: textColor ? textColor : ""
                            }}>
                            {title}
                        </h4>
                        {
                            text ?
                                <span className={`${projectContent}__screen-text`}
                                    style={{
                                        color: textColor ? textColor : ""
                                    }}>
                                    {text}
                                </span>
                                : null
                        }
                    </div>
                    <div className={`${projectContent}__screen-image-container`}>
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
                        {
                            mobileImageContent ?
                                mobileImageContent.map((imageContent, index) => {
                                    return (
                                        <div className={`${projectContent}__screen-mobile-content-container`}>
                                            {
                                                imageContent.title ?
                                                    <h4 key={`${imageContent.title}-${index}`}
                                                        className={`${projectContent}__screen-mobile-content-title`}
                                                        style={{
                                                            color: textColor ? textColor : ""
                                                        }}>{imageContent.title}</h4>
                                                    : null
                                            }
                                            {
                                                imageContent.text ?
                                                    <span key={`${imageContent.text}-${index}`}
                                                        className={`${projectContent}__screen-mobile-content-text`}
                                                        style={{
                                                            color: textColor ? textColor : ""
                                                        }}>{imageContent.text}</span>
                                                    : null
                                            }
                                            <div className={`${projectContent}__screen-mobile-content-image-container`}>
                                                {
                                                    imageContent.images.map((image, index) => {
                                                        return (
                                                            <img key={`${imageContent.title}-img-${index}`}
                                                                className={`${projectContent}__screen-mobile-content-image`}
                                                                src={require(`../assets/${image.src}.png`)}
                                                                alt={image.alt_text} />
                                                        )
                                                    })

                                                }
                                            </div>
                                        </div>

                                    )
                                })
                                : null
                        }
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
    //TitleSize configures if the title is larger or not (only for screen gallery right now)
    titleSize: PropTypes.string,
    textColor: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.object),
    //AlignMobileImages is used to line up mobile textImages.
    alignMobileImages: PropTypes.string,
    //MobileImageContent is used for screen gallery component's mobile content.
    mobileImageContent: PropTypes.arrayOf(PropTypes.object),
    highlightColor: PropTypes.string,
    backgroundColor: PropTypes.string,
}

export default memo(ProjectContent);