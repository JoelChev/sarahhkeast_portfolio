import React, { memo } from 'react';
import PropTypes from "prop-types";
import ArrowRightWhite from '../assets/arrow-right-white.svg';

const contactItem = 'contact-item';

const ContactItem = ({ image, alt_text, text, url }) => (
    <a className={`${contactItem}`} href={url} target="_blank">
        <div className={`${contactItem}__image-text-container`}>
            <img className={`${contactItem}__image`}
                src={image}
                alt={alt_text}></img>
            <span className={`${contactItem}__text`}>{text}</span>
        </div>
        <img className={`${contactItem}__arrow`} src={ArrowRightWhite} alt='contact-arrow-icon' />
    </a>
);

ContactItem.propTypes = {
    image: PropTypes.object,
    alt_text: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
}

export default memo(ContactItem);