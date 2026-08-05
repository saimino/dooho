import React, { useState } from 'react';

const OtherProjects = ({OtherProjectsItemData}) => {
    const menu = OtherProjectsItemData.menu;
    const [selected, setSelected] = useState(menu[0]);
    const items = OtherProjectsItemData.items[selected] || [];

    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="other-projects wrapper">
                    <h4>Other Projects</h4>

                    <div className="op-filter">
                        {menu.map((name, key) => (
                            <button key={key}
                                    className={"op-filter-btn" + (name === selected ? " active" : "")}
                                    onClick={() => setSelected(name)}>
                                {name}
                            </button>
                        ))}
                    </div>

                    {items.map((item, key) => (
                        <div className="op-item" key={selected + key}>
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
