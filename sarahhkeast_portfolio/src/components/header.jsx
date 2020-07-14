import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

const header = 'header';

const Header = () => {

    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    );


    const listener = e => {
        setBodyOffset(document.body.getBoundingClientRect());
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    const isAboutPage = () => {
        return window.location.href.includes("about");
    };

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
            </div>
            <div className={`${header}__space-container`} />
        </div>
    );
};

export default Header;