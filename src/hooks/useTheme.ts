import { useState, useEffect } from 'react';

type ThemeValue<T1, T2> = {
	value: T1 | T2;
	isDarkMode: boolean;
};

// Define the hook function
function useTheme<T1, T2>(t1: T1, t2: T2): ThemeValue<T1, T2> {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const handleThemeChange = () => {
			setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
		};

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handleThemeChange);

		// Clean up the event listener when the component is unmounted
		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', handleThemeChange);
		};
	}, []);

	return {
		value: isDarkMode ? t1 : t2,
		isDarkMode,
	};
}

export default useTheme;
