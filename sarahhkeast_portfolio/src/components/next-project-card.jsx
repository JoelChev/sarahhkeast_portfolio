import React, { memo } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

import ArrowRightBlack from '../assets/arrow-right-black.svg';
import ArrowRightWhite from '../assets/arrow-right-white.svg';

const nextProjectCard = 'next-project-card';

const NextProjectCard = ({ nextProjectId, title, textColor, backgroundColor, image }) => (
    <div className={`${nextProjectCard}`}
        style={{
            backgroundColor: backgroundColor ? backgroundColor : '$color-yokko-yellow'
        }}>
        <div className={`${nextProjectCard}__title-container`}>
            <div className={`${nextProjectCard}__title-wrapper`}>
                <span className={`${nextProjectCard}__text`}
                    style={{
                        color: textColor ? textColor : ''
                    }}>Up Next</span>
                <h4 className={`${nextProjectCard}__title`}
                    style={{
                        color: textColor ? textColor : ''
                    }}>{title}</h4>
                <div className={`${nextProjectCard}__link-container`}>
                    <a className={classnames(`${nextProjectCard}__link`, textColor === "white" ? `${nextProjectCard}__link--white` : '')}
                        href={`/project/${nextProjectId}`}>
                        <span className={`${nextProjectCard}__link-text`}
                            style={{
                                color: textColor ? textColor : ''
                            }}>Let's Go</span>
                        <img className={`${nextProjectCard}__link-image`}
                            src={textColor && textColor === "white" ? ArrowRightWhite : ArrowRightBlack}
                            alt='Next Project Arrow' />
                    </a>
                </div>
            </div>
        </div>
        <div className={`${nextProjectCard}__image-container`}>
            <img className={`${nextProjectCard}__image`}
                src={require(`../assets/${image.src}.png`)}
                alt={`${image.alt_text}`} />
            <img className={`${nextProjectCard}__image-mobile`}
                src={require(`../assets/${image.src_mobile}.png`)}
                alt={`${image.alt_text}`} />
        </div>
    </div>
)

NextProjectCard.propTypes = {
    nextProjectId: PropTypes.number,
    title: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.object),
}

export default memo(NextProjectCard);
