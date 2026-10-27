import React, { useState } from 'react';
import PublicationItemData from '../../data/publication/publicationItems.json';
import { useT } from '../../i18n/Prefs';

const PUBLICATIONS = 'publications';

const pillName = (key) => key.charAt(0).toUpperCase() + key.slice(1);

const withBoldName = (authors) => {
    const parts = authors.split('Dooho Choi');
    return parts.map((part, i) => (
        <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && <b>Dooho Choi</b>}
        </React.Fragment>
    ));
};

const PublicationItems = () => PublicationItemData.map((item, key) => (
    <div className="op-item op-pub" key={'pub' + key}>
        <div className="op-head">
            <h6>{item.title}</h6>
        </div>
        <p className="op-authors">{withBoldName(item.Authors)}</p>
        <p className="op-venue">{item.bookTitle}</p>
        {item.material && Object.keys(item.material).length > 0 && (
            <div className="op-links">
                {Object.keys(item.material).map((name, index) => (
                    <a key={index} className="portfolio-pill" href={item.material[name]}
                       target="_blank" rel="noopener noreferrer">
                        {pillName(name)} <span className="arrow">↗</span>
                    </a>
                ))}
            </div>
        )}
    </div>
));

const OtherProjects = ({OtherProjectsItemData}) => {
    const t = useT();
    const menu = [PUBLICATIONS, ...OtherProjectsItemData.menu];
    // keep the selection by position so it survives a language switch
    const [selected, setSelected] = useState(0);
    const label = (name) => name === PUBLICATIONS ? t('allPublications') : name;

    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="other-projects wrapper">
                    <h4>{t('otherProjects')}</h4>

                    <div className="op-filter">
                        {menu.map((name, key) => (
                            <button key={key}
                                    className={"op-filter-btn" + (key === selected ? " active" : "")}
                                    onClick={() => setSelected(key)}>
                                {label(name)}
                            </button>
                        ))}
                    </div>

                    {menu.map((name, index) => (
                        <div key={name} className={"op-group" + (index === selected ? " active" : "")}>
                            <h5 className="op-group-title">{label(name)}</h5>
                            {name === PUBLICATIONS ? <PublicationItems/> :
                                (OtherProjectsItemData.items[name] || []).map((item, key) => (
                                <div className="op-item" key={name + key}>
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
                                    {item.desc && <p className="op-desc" dangerouslySetInnerHTML={{__html: item.desc}} />}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherProjects;
