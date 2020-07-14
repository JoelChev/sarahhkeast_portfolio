import React, { memo } from 'react';
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
                    console.log(image);
                    return (
                        <img key={`${title}-img-${index}`}
                            className={`${projectContent}__image`}
                            src={require(`../assets/${image.src}.png`)}
                            alt={image.alt_text} />
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