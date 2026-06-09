import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Fragment } from 'react';

const Prof = ({ProfData}) => { 
    const icons = {
        'cv': <i class="ai ai-cv ai-2x"></i>,
        'google scholar': <i class="ai ai-google-scholar ai-2x"></i>,
        'github': <FontAwesomeIcon icon={faGithub} size='2xl'/>,
        'linkedin': <FontAwesomeIcon icon={faLinkedin} size='2xl'/>,
        'twitter': <FontAwesomeIcon icon={faTwitter} size='2xl'/>
    };

    return (
        <section id="page-content" className="spacer">
            <div className="peoplecard">
                <div className="wrapper">
                    <div className="prof_cardwrapper">
                        {ProfData.map((item) => {
                            return (
                                <div className="img_div">
                                    <figure>
                                        <img className="prof_img" src={process.env.PUBLIC_URL + `/assets/img/people/`+ item.img}
                                            alt={item.title}/>
                                    </figure>

                                    <div className="info_div">
                                        <h4>{item.title}</h4>
                                        <p>AI researcher <br/>
                                        MSc Student @ <a href='https://www.dongguk.edu/'>Dongguk University</a>, Dept. of Computer Science and Artificial Intelligence
                                        &nbsp;(Advisor: Prof. Yunsick Sung 성연식). <br/>
                                        Research Interest: Controllable Multimodal Generation, Text-to-MIDI Symbolic Music Generation. <br/>
                                        likeb789@dgu.ac.kr
                                        </p>
                                        <div className="btn_div">
                                            {Object.keys(item.material).map((key_name, index) => {
                                                    return(
                                                        <Fragment>
                                                        {/* <LinkButton 
                                                            keyword = {key_name} 
                                                            link={item.material[key_name]}
                                                            position = "inline"
                                                            textcolor = "has-white-color"
                                                            backgroundcolor = "has-gray-dark-background-color"
                                                        /> */}
                                                        <a href={item.material[key_name]} 
                                                            className={`btn ${index===0 ? '' : 'inline'} 
                                                                    has-white-color has-gray-dark-background-color`}
                                                        >
                                                            {icons[key_name]}
                                                        </a>
                                                        </Fragment>
                                                    );
                                                })
                                            }

                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prof;
