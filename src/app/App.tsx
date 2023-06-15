import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/ClassNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import {SideBar} from "widgets/SideBar";
import {useTranslation} from "react-i18next";

const Component = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <button onClick={toggle}>{t('Перевод')}</button>
            {t('Тестовый перевод')}
        </div>
    )
}

const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <Suspense fallback="">
                <Navbar />
                <Component />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;