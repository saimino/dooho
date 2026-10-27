import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';


import Sidebar from '../blocks/sidebar/Sidebar';
import Footer from '../blocks/footer/Footer';

import Intro from '../blocks/intro/Intro'
import IntroInfoData from '../data/intro/introInfo.json';
import IntroInfoDataKo from '../data/intro/introInfo.ko.json';

import Portfolio from '../blocks/portfolio/Portfolio'
import PortfolioItemData from '../data/portfolio/portfolioItems.json';
import PortfolioItemDataKo from '../data/portfolio/portfolioItems.ko.json';


import OtherProjects from '../blocks/portfolio/OtherProjects';
import OtherProjectsItemData from '../data/portfolio/otherProjectsItems.json';
import OtherProjectsItemDataKo from '../data/portfolio/otherProjectsItems.ko.json';
import { useLocalized } from '../i18n/Prefs';


const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-color-custom' );
    // document.body.classList.add( 'bg-line' );
    const introInfo = useLocalized(IntroInfoData, IntroInfoDataKo);
    const portfolioItems = useLocalized(PortfolioItemData, PortfolioItemDataKo);
    const otherProjectsItems = useLocalized(OtherProjectsItemData, OtherProjectsItemDataKo);
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
                <meta name="description" content="Dooho Choi — MSc student at Dongguk University. Controllable Multimodal Generation, Text-to-MIDI Symbolic Music Generation." />
                <meta name="keywords" content="controllable generation, multimodal, Text-to-MIDI, symbolic music generation, diffusion, LoRA" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <div className="layout">
                <Sidebar/>
                <main id="main" className="site-main font-family layout-content">
                    <Intro IntroInfoData={introInfo} showStatements={false} showSkills={false}/>
                    <Portfolio PortfolioItemData={portfolioItems}/>
                    <OtherProjects OtherProjectsItemData={otherProjectsItems}/>
                    <Footer />
                </main>
            </div>
        </Fragment>
    );
};

export default Home;
