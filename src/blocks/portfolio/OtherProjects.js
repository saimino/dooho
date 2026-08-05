import React from 'react';

const OtherProjects = ({OtherProjectsItemData}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="other-projects wrapper">
                    <h4>Other Projects</h4>
                    {OtherProjectsItemData.map((item, key) => (
                        <div className="op-item" key={key}>
                            <div className="op-head">
                                <h6>{item.title}</h6>
                                <span className="op-period">{item.period}</span>
                                {Object.keys(item.links).map((keyName, index) => (
                                    <a key={index} className="portfolio-pill" href={item.links[keyName]}
                                       target="_blank" rel="noopener noreferrer">
                                        {keyName} <span className="arrow">↗</span>
                                    </a>
                                ))}
                            </div>
                            <p className="op-role">{item.role}</p>
                            <p className="op-desc" dangerouslySetInnerHTML={{__html: item.desc}} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherProjects;
