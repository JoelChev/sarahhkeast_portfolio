import React, { memo } from 'react';
import PropTypes from "prop-types";
import classnames from 'classnames';

import { INSTAGRAM, LINKEDIN, DRIBBBLE } from '../constants/contact';

import Dribble from '../assets/dribbble.svg';
import LinkedIn from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';

const footer = 'footer';

const Footer = ({ isDark, showIcons }) => (

    <div className={classnames(`${footer}`, isDark ? `${footer}--dark` : '')}>
        <div className={`${footer}__wrapper`}>
            <span className={classnames(`${footer}__copyright-text`, isDark ? `${footer}__copyright-text--large` : '')}>Sarah Keast 2020</span>
        </div>
        {
            showIcons ?
                <div className={`${footer}__icon-container`}>
                    <a className={`${footer}__icon`} href={DRIBBBLE} target="_blank" rel="noopener noreferrer"><img src={Dribble}></img></a>
                    <a className={`${footer}__icon`} href={LINKEDIN} target="_blank" rel="noopener noreferrer"><img src={LinkedIn}></img></a>
                    <a className={classnames(`${footer}__icon`, `${footer}__icon--instagram`)} href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><img src={Instagram}></img></a>
                </div>
                :
                <div className={`${footer}__spacer`} />
        }

    </div>
);

Footer.propTypes = {
    isDark: PropTypes.bool,
    showIcons: PropTypes.bool,
}

export default memo(Footer);