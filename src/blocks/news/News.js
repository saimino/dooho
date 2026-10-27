import React from 'react';
import { useT } from '../../i18n/Prefs';

const News = ({NewsInfoData}) => {
    const t = useT();
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="news wrapper">
                    <h4>{t('news')}</h4>
                    <ul className="news-list">
                        {NewsInfoData.map((item, key) => (
                            <li className="news-item" key={key}>
                                <span className="news-date">{item.date}</span>
                                <div className="news-body">
                                    <span className="news-text" dangerouslySetInnerHTML={{__html: item.contents}} />
                                    {Object.keys(item.links || {}).map((name, i) => (
                                        <a key={i} className="portfolio-pill" href={item.links[name]}
                                           target="_blank" rel="noopener noreferrer">
                                            {name} <span className="arrow">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default News;
