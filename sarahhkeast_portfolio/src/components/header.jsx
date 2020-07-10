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

    return (
        <div className={classnames(`${header}`, bodyOffset.top ? `${header}--shadow` : '')}>
            <div className={`${header}__text-container`}>
                <span className={`${header}__name`}>Sarah Keast</span>
                <span className={`${header}__about`}>About</span>
            </div>
            <div className={`${header}__space-container`} />
        </div>
    );
};

export default Header;