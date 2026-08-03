import React, { Fragment } from 'react';

const Intro = ({IntroInfoData, showStatements = true, showSkills = true}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="intro wrapper">
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
