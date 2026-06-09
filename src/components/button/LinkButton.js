import React from 'react';

const LinkButton = ({keyword, link, position, textcolor, backgroundcolor}) => {
    const config = `btn ${position} has-text-color ${textcolor} has-background ${backgroundcolor}`
    return (
            <a href={link} className={config}>
                <b>{keyword}</b>
            </a>
    );
};

export default LinkButton;
