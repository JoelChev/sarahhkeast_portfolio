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
        <span className={`${footer}__copyright-text`}>Sarah Keast 2020</span>
        {
            showIcons ?
                <div className={`${footer}__icon-container`}>
                    <a className={`${footer}__icon-link`} href={DRIBBBLE} target="_blank" rel="noopener noreferrer"><img className={`${footer}__icon`} src={Dribble}></img></a>
                    <a className={`${footer}__icon-link`} href={LINKEDIN} target="_blank" rel="noopener noreferrer"><img className={`${footer}__icon`} src={LinkedIn}></img></a>
                    <a className={`${footer}__icon-link`} href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><img className={classnames(`${footer}__icon`, `${footer}__icon--instagram`)} src={Instagram}></img></a>
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