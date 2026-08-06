import React, { Fragment } from 'react';

const Intro = ({IntroInfoData, showStatements = true, showSkills = true}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="intro wrapper">
                    {IntroInfoData.hello && (
                        <div className="intro-statement">
                            <h5 className="intro-headline hello-title">{IntroInfoData.hello.title}</h5>
                            <p className="intro-body" dangerouslySetInnerHTML={{__html: IntroInfoData.hello.body}} />
                        </div>
                    )}

                    {IntroInfoData.interests && (
                        <Fragment>
                            <h4>Research interests</h4>
                            <p className="interest-note">{IntroInfoData.interests.note}</p>
                            <ul className="star-list">
                                {IntroInfoData.interests.items.map((it, key) => (
                                    <li key={key}>{it}</li>
                                ))}
                            </ul>
                        </Fragment>
                    )}

                    {showStatements && IntroInfoData.statements.map((item, key) => (
                        <div className="intro-statement" key={key}>
                            <h5 className="intro-headline" dangerouslySetInnerHTML={{__html: item.headline}} />
                            <p className="intro-body" dangerouslySetInnerHTML={{__html: item.body}} />
                        </div>
                    ))}

                    {showSkills && (
                        <Fragment>
                            <h4>Skills</h4>
                            <ul className="star-list">
                                {IntroInfoData.skills.map((skill, key) => (
                                    <li key={key}>{skill}</li>
                                ))}
                            </ul>
                        </Fragment>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Intro;
