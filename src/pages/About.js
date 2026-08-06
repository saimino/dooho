import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Sidebar from '../blocks/sidebar/Sidebar';
import Footer from '../blocks/footer/Footer';

import AboutMe from '../blocks/aboutme/AboutMe';
import LifeInfoData from '../data/life/lifeInfo.json';

const About = () => {
    document.body.classList.add( 'about' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Dooho Choi</title>
                {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>"></link> */}
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>
            <div className="layout">
                <Sidebar/>
                <main id="main" className="site-main layout-content">
                    <AboutMe LifeInfoData={LifeInfoData}/>
                    <Footer />
                </main>
            </div>
        </Fragment>
    );
};

export default About;
