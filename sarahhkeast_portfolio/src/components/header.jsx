import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import MenuMobile from '../assets/menu-mobile.svg';
import Close from '../assets/close.svg';

import MenuModal from './menu-modal';

const header = 'header';
const menuModal = 'menuModal';

const Header = () => {

    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    );

    const [showModal, setShowModal] = useState(false);
    const [hidingModal, setHidingModal] = useState(false);

    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        }
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
            document.body.style.overflow = 'unset';
        };

    });

    const isAboutPage = () => {
        return window.location.href.includes("about");
    };

    const handleCloseModal = () => {
        setHidingModal(true);
        setTimeout(() => {
            setShowModal(false);
            setHidingModal(false);
        }, 201);
    }

    return (

        <div className={classnames(`${header}`, bodyOffset.top ? `${header}--shadow` : '')}>
            <div className={`${header}__text-container`}>
                <a className={`${header}__name`} href='/'>Sarah Keast</a>
                {
                    isAboutPage() ?
                        <span className={`${header}__about-selected`} href='/about' >About</span>
                        :
                        <a className={`${header}__about`} href='/about' >About</a>
                }
                <a className={`${header}__resume`} href={`${process.env.PUBLIC_URL}/SarahKeastRésumé.pdf`} target="_blank" rel="noopener noreferrer">
                    Résumé
                </a>
            </div>
            <div className={`${header}__mobile-container`}>
                <button className={`${header}__mobile-menu-button`}
                    onClick={() => setShowModal(true)}>
                    <img src={MenuMobile} />
                </button>
            </div>
            {
                showModal ?
                    <MenuModal>
                        <div className={`${menuModal}`}>
                            <div className={`${menuModal}__overlay`} />
                            <div className={classnames(`${menuModal}__content`, hidingModal ? `${menuModal}__content--hiding` : '')}>
                                <div className={`${menuModal}__close-button-container`}>
                                    <button className={`${menuModal}__close-button`}
                                        onClick={() => handleCloseModal()}>
                                        <img src={Close} />
                                    </button>
                                </div>
                                <div className={`${menuModal}__menu-option-container`}>
                                    <a className={`${menuModal}__menu-option`} href='/'>
                                        Home
                                    </a>
                                    <a className={`${menuModal}__menu-option`} href='/about'>
                                        About
                                    </a>
                                    <a className={`${menuModal}__menu-option`} href={`${process.env.PUBLIC_URL}/SarahKeastRésumé.pdf`} target="_blank" rel="noopener noreferrer">
                                        Résumé
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MenuModal>
                    : null
            }
        </div>
    );
};

export default Header;