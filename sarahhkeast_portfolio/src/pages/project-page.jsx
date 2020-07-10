import React, { Component } from 'react';
import classnames from 'classnames';

import ArrowLeftBlue from '../assets/arrow-left-blue.svg';

const projectPage = 'projectPage';

class ProjectPage extends Component {

    render() {
        return (
            <div className={`${projectPage}`}>
                <div className={`${projectPage}__header`}>
                    <div className={`${projectPage}__back-link-container`}>
                        <a className={`${projectPage}__back-link`} href='/'>
                            <img className={`${projectPage}__back-link-icon`} src={ArrowLeftBlue} />
                            <span>Back</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}
export default ProjectPage;