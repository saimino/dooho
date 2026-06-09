import React from 'react';

const Edu = ({EduInfoData}) => { 
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="eduacation wrapper">
                    <h4>Education</h4>
                    <div className="eduacation">
                    { EduInfoData.map((item) => {
                            return (
                                <>
                                    <h6>{ item.school }</h6>
                                    <p>{ item.position } {item.advisor !== "" ? (<p>{ item.advisor }</p>) : null}</p>
                                    <p className="date">{ item.duration }</p>
                                </>
                            );
                        } ) }
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Edu;
