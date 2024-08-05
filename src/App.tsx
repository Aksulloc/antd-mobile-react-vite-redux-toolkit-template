import RouterComponent from '@/router';
import { useAppSelector } from './store';

import { ConfigProvider } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { ThemeContext } from './context/color-mode';
import { antI18n } from './i18n';
import { II18nKey } from './interface/i18n';
import { i18nSelector } from './store/features/i18nSlice';
import { setHtmlLang } from './utils/i18n';
// import DarkModeContext from "./context/DarkModeContext";

const App = () => {
    const i18nState = useAppSelector(i18nSelector);
    // 通过全局状态获取当前语言
    const locale = i18nState.localLanguage as II18nKey;
    const [i18nLanguage, setI18nLanguage] = useState(antI18n[locale]);
    const [systemTheme, setSystemTheme] = useState('dark');
    const defaultContext = {
        setTheme: setSystemTheme,
        themes: [],
        resolvedTheme: systemTheme,
    };

    useEffect(() => {
        setHtmlLang(locale);
        setI18nLanguage(antI18n[locale]);
    }, [locale]);

    return (
        <ThemeContext.Provider value={defaultContext}>
            <ConfigProvider locale={i18nLanguage}>
                <div className="myApp">
                    <RouterComponent />
                </div>
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};

export default App;
