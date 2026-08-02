import React from 'react';

const Intro = ({IntroInfoData}) => {
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="intro wrapper">
                    {IntroInfoData.statements.map((item, key) => (
                        <div className="intro-statement" key={key}>
                            <h5 className="intro-headline" dangerouslySetInnerHTML={{__html: item.headline}} />
                            <p className="intro-body" dangerouslySetInnerHTML={{__html: item.body}} />
                        </div>
                    ))}

                    <h4>Skills</h4>
                    <ul className="star-list">
                        {IntroInfoData.skills.map((skill, key) => (
                            <li key={key}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Intro;
