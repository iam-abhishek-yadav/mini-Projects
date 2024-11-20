import React, { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
	themeMode: string;
	darkTheme: () => void;
	lightTheme: () => void;
}

const defaultContext: ThemeContextType = {
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const ThemeProvider: React.FC<{
	value: ThemeContextType;
	children: ReactNode;
}> = ({ value, children }) => {
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default function useTheme(): ThemeContextType {
	return useContext(ThemeContext);
}
