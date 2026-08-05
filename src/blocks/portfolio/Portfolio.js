import React from 'react';

const Portfolio = ({PortfolioItemData}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="portfolio wrapper">
                    <h4>Projects</h4>
                    {PortfolioItemData.map((item, key) => (
                        <div className="portfolio-item" key={key}>
                            <div className="portfolio-head">
                                <div className="portfolio-logo" style={{background: item.gradient}}>{item.logo}</div>
                                <div className="portfolio-titlebox">
                                    <h5 style={{color: item.accent}}>{item.title}</h5>
                                    <p className="portfolio-period">{item.period}</p>
                                </div>
                                <div className="portfolio-links">
                                    {Object.keys(item.links).map((keyName, index) => (
                                        <a key={index} className="portfolio-pill" href={item.links[keyName]}
                                           target="_blank" rel="noopener noreferrer">
                                            {keyName} <span className="arrow">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {item.heroImg ? (
                                <div className={"portfolio-hero portfolio-hero-img" + (item.heroImgOnGradient ? " on-gradient" : "")}
                                     style={item.heroImgOnGradient ? {background: item.gradient} : undefined}>
                                    <img src={process.env.PUBLIC_URL + '/assets/img/projects/' + item.heroImg}
                                         alt={item.title} loading="lazy"/>
                                </div>
                            ) : (
                                <div className="portfolio-hero" style={{background: item.gradient}}>
                                    <div className="portfolio-hero-mark">
                                        <div className="big">{item.heroTitle}</div>
                                        <div className="sub">{item.heroSub}</div>
                                    </div>
                                </div>
                            )}

                            <h6>개요 📄</h6>
                            <p className="portfolio-overview" dangerouslySetInnerHTML={{__html: item.overview}} />

                            <h6>역할 🧑‍💻</h6>
                            <ul className="star-list">
                                {item.roles.map((role, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{__html: role}} />
                                ))}
                            </ul>

                            <h6>Skills 🛠</h6>
                            <ul className="star-list">
                                {item.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
