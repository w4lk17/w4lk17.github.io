import {
	createContext,
	useContext,
	useEffect,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
	children: ReactNode
	defaultTheme?: Theme
}

type ThemeContextType = {
	theme: Theme
	setTheme: Dispatch<SetStateAction<Theme>>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
	children,
	defaultTheme = 'dark',
}: ThemeProviderProps) {

	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem('theme') as Theme) || defaultTheme
	)

	useEffect(() => {
		const root = document.documentElement
		const dark =
			theme === 'dark' ||
			(theme === 'system' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)

		root.classList.toggle('dark', dark)
		localStorage.setItem('theme', theme)
	}, [theme])


	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)

	// check for 'undefined' This ensures the hook is only used inside a <ThemeProvider>
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}

	return context
}