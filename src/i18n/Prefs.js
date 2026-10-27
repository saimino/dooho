import React, { createContext, useContext, useEffect, useState } from 'react';
import strings from './strings';

const read = (key) => { try { return localStorage.getItem(key); } catch (e) { return null; } };
const write = (key, value) => { try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ } };

const PrefsContext = createContext(null);

// public/index.html sets data-theme before the first paint, so start from it
const initialTheme = () => document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

export const PrefsProvider = ({children}) => {
    const [lang, setLang] = useState(() => read('lang') === 'ko' ? 'ko' : 'en');
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleLang = () => setLang((prev) => {
        const next = prev === 'en' ? 'ko' : 'en';
        write('lang', next);
        return next;
    });

    const toggleTheme = () => setTheme((prev) => {
        const next = prev === 'dark' ? 'light' : 'dark';
        write('theme', next);
        return next;
    });

    return (
        <PrefsContext.Provider value={{lang, theme, toggleLang, toggleTheme}}>
            {children}
        </PrefsContext.Provider>
    );
};

export const usePrefs = () => useContext(PrefsContext);

// t('projects') → UI label in the current language
export const useT = () => {
    const {lang} = usePrefs();
    return (key) => strings[lang][key] ?? strings.en[key] ?? key;
};

// pick the data file for the current language: useLocalized(enData, koData)
export const useLocalized = (en, ko) => {
    const {lang} = usePrefs();
    return lang === 'ko' && ko ? ko : en;
};
