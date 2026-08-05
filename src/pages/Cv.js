import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import CvViewer from '../blocks/cv/CvViewer';

const Cv = () => {
    document.body.classList.add( 'about' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Dooho Choi</title>
                <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Curriculum Vitae of Dooho Choi" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>
            <Header/>

            <main id="main" className="site-main">
                <div className="cv-page-spacer" />
                <CvViewer/>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Cv;
