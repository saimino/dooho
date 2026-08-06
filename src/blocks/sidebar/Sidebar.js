import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <img className="sidebar-photo" src={process.env.PUBLIC_URL + '/assets/img/people/profile.jpg'}
                 alt="Dooho Choi"/>

            <h3 className="sidebar-name">Dooho Choi</h3>
            <p className="sidebar-role">AI Researcher</p>
            <p className="sidebar-affil">
                MSc Student @ <a href="https://www.dongguk.edu/" target="_blank" rel="noopener noreferrer">Dongguk University</a><br/>
                Advisor: Prof. Yunsick Sung
            </p>
            <p className="sidebar-email">likeb789@dgu.ac.kr</p>

            <div className="sidebar-icons">
                <a href="https://scholar.google.com/citations?user=ah01XoEAAAAJ" target="_blank" rel="noopener noreferrer"
                   aria-label="Google Scholar"><i className="ai ai-google-scholar ai-1x"></i></a>
                <a href="https://github.com/saimino" target="_blank" rel="noopener noreferrer"
                   aria-label="GitHub"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/PLACEHOLDER/" target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>

            <nav className="sidebar-nav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About Me</NavLink>
                <NavLink to="/cv" activeClassName="active">CV</NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
