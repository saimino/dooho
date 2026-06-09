import React from 'react';

const DownloadButton = ({keyword, link, position, textcolor, backgroundcolor}) => {
    const config = `btn ${position} has-text-color ${textcolor} has-background ${backgroundcolor}`
    return (
            <a href={link} download="CV" className={config}>
                <b>{keyword}</b>
            </a>
    );
};

export default DownloadButton;
