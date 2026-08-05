import React from 'react';

const AboutMe = ({IntroInfoData, LifeInfoData}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="about-me intro life wrapper">
                    {IntroInfoData.statements.map((item, key) => (
                        <div className="intro-statement" key={key}>
                            <h5 className="intro-headline" dangerouslySetInnerHTML={{__html: item.headline}} />
                            <p className="intro-body" dangerouslySetInnerHTML={{__html: item.body}} />
                        </div>
                    ))}

                    <ul className="star-list">
                        {LifeInfoData.statements.map((line, key) => (
                            <li key={key}>{line}</li>
                        ))}
                    </ul>

                    <div className="life-photos">
                        {LifeInfoData.photos.map((photo, key) => (
                            <figure className="life-photo" key={key}>
                                <img src={process.env.PUBLIC_URL + '/assets/img/about/' + photo.img}
                                     alt={photo.alt} loading="lazy"/>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
