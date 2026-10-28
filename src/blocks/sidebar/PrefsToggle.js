import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { usePrefs, useT } from '../../i18n/Prefs';

// filled disc with line rays (Font Awesome's sun uses triangle rays)
const SunIcon = () => (
    <svg className="prefs-sun" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true"
         fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.5" stroke="none"/>
        <line x1="12" y1="1.5" x2="12" y2="3.5"/>
        <line x1="12" y1="20.5" x2="12" y2="22.5"/>
        <line x1="1.5" y1="12" x2="3.5" y2="12"/>
        <line x1="20.5" y1="12" x2="22.5" y2="12"/>
        <line x1="4.58" y1="4.58" x2="6" y2="6"/>
        <line x1="18" y1="18" x2="19.42" y2="19.42"/>
        <line x1="4.58" y1="19.42" x2="6" y2="18"/>
        <line x1="18" y1="6" x2="19.42" y2="4.58"/>
    </svg>
);

const PrefsToggle = () => {
    const {lang, theme, toggleLang, toggleTheme} = usePrefs();
    const t = useT();
    const dark = theme === 'dark';

    return (
        <div className="prefs-toggle">
            <button type="button" className="prefs-btn prefs-lang" onClick={toggleLang}
                    aria-label={t('switchLang')} title={t('switchLang')}>
                <span className={lang === 'en' ? 'on' : ''}>EN</span>
                <span className="sep">/</span>
                <span className={lang === 'ko' ? 'on' : ''}>KO</span>
            </button>
            <button type="button" className="prefs-btn prefs-theme" onClick={toggleTheme}
                    aria-label={dark ? t('lightMode') : t('darkMode')} title={dark ? t('lightMode') : t('darkMode')}>
                {dark ? <SunIcon/> : <FontAwesomeIcon icon={faMoon}/>}
            </button>
        </div>
    );
};

export default PrefsToggle;
