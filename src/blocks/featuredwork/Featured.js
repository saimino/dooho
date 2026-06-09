import React from 'react';
import Search from '../../assets/img/placeholder/search.png'
import Piano from '../../assets/img/placeholder/piano.png'
import Singing from '../../assets/img/placeholder/singing.png'
import Creative from '../../assets/img/placeholder/creative.png'
const Featured = ({FeaturedInfoData}) => {
    let Img;
    Img = [Search, Piano, Singing, Creative]
    return (
        <section id="page-content">
            <div id="blog">
                <div className="wrapper">
                    <div className="row gutter-width-lg">
                            {FeaturedInfoData.map((item, index) => {
                                return (
                                    <div className="col-3">
                                        <div className="card card-post border-0">
                                            <div className="card-top position-relative">
                                                <a title="Card" href={ process.env.PUBLIC_URL + item.link }>
                                                    <div className="img object-fit overflow-hidden">
                                                        <div className="object-fit-cover transform-scale-h">
                                                            <img className="card-top-img" src={Img[index]} alt={item.title} />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="card-body">
                                                <h6 className="card-title">
                                                    <a title="Card body" href={ process.env.PUBLIC_URL + item.link }>{item.title}</a>
                                                </h6>
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

export default Featured;
