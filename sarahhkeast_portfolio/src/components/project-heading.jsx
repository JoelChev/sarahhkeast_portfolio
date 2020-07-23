import React, { memo } from 'react';
import PropTypes from "prop-types";

const projectHeading = 'project-heading';

const ProjectHeading = ({ title, subTitle, backgroundColor }) => (

    <div className={`${projectHeading}`}>
        <div className={`${projectHeading}__text-container`}>
            <div className={`${projectHeading}__title-container`}>
                <div className={`${projectHeading}__title-align-container`}>
                    <h2 className={`${projectHeading}__title`}>{title}</h2>
                    <h2 className={`${projectHeading}__sub-title`}>{subTitle}</h2>
                </div>
            </div>
        </div>
        <div style={{
            background: backgroundColor ? backgroundColor : '$color-yokko-yellow'
        }}
            className={`${projectHeading}__background-image-container`} />
    </div>
);

ProjectHeading.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    backgroundColor: PropTypes.string,
}

export default memo(ProjectHeading);
