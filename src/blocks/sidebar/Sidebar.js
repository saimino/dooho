import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PrefsToggle from './PrefsToggle';
import { useT } from '../../i18n/Prefs';

const Sidebar = () => {
    const t = useT();
    return (
        <>
            <PrefsToggle/>
            <aside className="sidebar">
                <img className="sidebar-photo" src={process.env.PUBLIC_URL + '/assets/img/people/profile.jpg'}
                     alt="Dooho Choi"/>

                <h3 className="sidebar-name">Dooho Choi</h3>
                <p className="sidebar-role">{t('role')}</p>
                <p className="sidebar-affil">{t('affil')}</p>
                <p className="sidebar-email">likeb789@dgu.ac.kr</p>

                <div className="sidebar-icons">
                    <a href="https://scholar.google.com/citations?user=ah01XoEAAAAJ" target="_blank" rel="noopener noreferrer"
                       aria-label="Google Scholar"><i className="ai ai-google-scholar ai-1x"></i></a>
                    <a href="https://github.com/saimino" target="_blank" rel="noopener noreferrer"
                       aria-label="GitHub"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/dooho-choi-3937ab2b6/" target="_blank" rel="noopener noreferrer"
                       aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>

                <nav className="sidebar-nav">
                    <NavLink exact to="/" activeClassName="active">{t('home')}</NavLink>
                    <NavLink to="/news" activeClassName="active">{t('news')}</NavLink>
                    <NavLink to="/about" activeClassName="active">{t('about')}</NavLink>
                    <NavLink to="/cv" activeClassName="active">{t('cv')}</NavLink>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
