import React from 'react';

const defaultContext: UseThemeProps = {
    setTheme: (_) => {},
    themes: [],
};

export const ThemeContext = React.createContext<UseThemeProps | undefined>(
    undefined
);

export interface UseThemeProps {
    /** List of all available theme names */
    themes: string[];
    /** Forced theme name for the current page */
    forcedTheme?: string | undefined;
    /** Update the theme */
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    /** Active theme name */
    theme?: string | undefined;
    /** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
    resolvedTheme?: string | undefined;
    /** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
    systemTheme?: 'dark' | 'light' | undefined;
}

export const useTheme = () => React.useContext(ThemeContext) ?? defaultContext;

export function useColorMode() {
    const { resolvedTheme, setTheme } = useTheme();
    const toggleColorMode = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        document.documentElement.setAttribute(
            'data-prefers-color-scheme',
            resolvedTheme === 'light' ? 'dark' : 'light'
        );
    };

    const setColorMode = (colorMode: 'light' | 'dark') => {
        setTheme(colorMode);
        document.documentElement.setAttribute(
            'data-prefers-color-scheme',
            colorMode
        );
    };
    return {
        colorMode: resolvedTheme,
        setColorMode: setColorMode,
        toggleColorMode,
    };
}

export function useColorModeValue<T>(light: T, dark: T) {
    const { colorMode } = useColorMode();
    return colorMode === 'light' ? light : dark;
}
