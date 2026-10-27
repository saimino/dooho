import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { usePrefs, useT } from '../../i18n/Prefs';

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
                <FontAwesomeIcon icon={dark ? faSun : faMoon}/>
            </button>
        </div>
    );
};

export default PrefsToggle;
