import React, { memo } from 'react';
import PropTypes from "prop-types";

const projectDescription = 'project-description';

const ProjectDescription = ({ text, tools, date }) => (

    <div className={`${projectDescription}`}>
        <div className={`${projectDescription}__text-container`}>
            <h4 className={`${projectDescription}__title`}>Project</h4>
            <p className={`${projectDescription}__text`}>{text} </p>
        </div>
        <div className={`${projectDescription}__tool-date-container`}>
            <div className={`${projectDescription}__tools-container`}>
                <h4 className={`${projectDescription}__tools-title`}>Tools Used</h4>
                {
                    tools.map(tool => {
                        return <span className={`${projectDescription}__tools-text`}>{tool}</span>
                    })
                }
            </div>
            <div className={`${projectDescription}__date-container`}>
                <h4 className={`${projectDescription}__date-title`}>Date</h4>
                <span className={`${projectDescription}__date-text`}>{date}</span>
            </div>
        </div>
    </div>
);

ProjectDescription.propTypes = {
    text: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
}

export default memo(ProjectDescription);



