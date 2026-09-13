const THEME_KEY = 'myrail-theme'

export const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY)

    if (savedTheme) {
        return savedTheme
    }

    return 'dark'
}

export const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
}

export const toggleTheme = (currentTheme) => {
    return currentTheme === 'dark' ? 'light' : 'dark'
}