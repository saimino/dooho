import React from 'react';

const AboutMe = ({LifeInfoData}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="about-me intro life wrapper">
                    <h5 className="intro-headline" dangerouslySetInnerHTML={{__html: LifeInfoData.headline}} />

                    {LifeInfoData.paragraphs.map((text, key) => (
                        <p className="intro-body about-paragraph" key={key}
                           dangerouslySetInnerHTML={{__html: text}} />
                    ))}

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
