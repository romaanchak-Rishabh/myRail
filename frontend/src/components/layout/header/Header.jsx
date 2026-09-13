import { useState, useEffect } from 'react'
import {
    ChevronDown,
    Hamburger,
    Moon,
    Sun
} from 'lucide-react'
import {
    getInitialTheme,
    applyTheme,
    toggleTheme
} from '../../../utils/theme.js'
import { useAuth0 } from '@auth0/auth0-react'

import ProfileDropdown from './ProfileDropdown'
import Button from '../../ui/Button'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        applyTheme(theme)
    }, [theme])

    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        user,
    } = useAuth0()

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        })
    }

    const handleSignup = () => {
        loginWithRedirect({
            authorizationParams: {
                screen_hint: 'signup',
            },
        })
    }

    return (
        <header className="mr-header">
            <div className="mr-header__container flex flex-row">
                {/* Logo */}
                <a
                    href="/"
                    className="mr-header__logo"
                    aria-label="myRail home"
                >
                    myRail
                </a>

                {/* Desktop navigation */}
                {isAuthenticated && (
                    <nav className="mr-header__nav">
                        <Button
                            variant="ghost"
                            size="sm"
                        >
                            Recent Journeys
                        </Button>
                    </nav>
                )}

                {/* Desktop actions */}
                <div className="mr-header__actions">

                    {/* Theme toggle */}
                    <button
                        type="button"
                        className="mr-theme-toggle"
                        onClick={() => setTheme(toggleTheme(theme))}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                    >
                        {theme === 'dark' ? (
                            <Moon size={18} />
                        ) : (
                            <Sun size={18} />
                        )}
                    </button>

                    {isAuthenticated ? (
                        <div className="mr-header__profile">
                            <Button
                                variant="secondary"
                                size="sm"
                                icon={
                                    <ChevronDown
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                }
                                iconPosition="right"
                                onClick={() =>
                                    setProfileOpen(!profileOpen)
                                }
                                aria-expanded={profileOpen}
                            >
                                {user?.name || 'Profile'}
                            </Button>

                            {profileOpen && (
                                <ProfileDropdown
                                    user={user}
                                    logout={handleLogout}
                                />
                            )}

                        </div>
                    ) : (
                        <div className="mr-header__auth">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleSignup}
                            >
                                Sign Up
                            </Button>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={loginWithRedirect}
                            >
                                Login
                            </Button>
                        </div>
                    )}
                </div>

                {/* Mobile menu button */}
                <Button
                    variant="ghost"
                    size="sm"
                    icon={
                        menuOpen ? (
                            <span>×</span>
                        ) : (
                            <Hamburger size={20} />
                        )
                    }
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="mr-header__mobile-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                />
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="mr-header__mobile-menu">
                    {isAuthenticated && (
                        <Button
                            variant="ghost"
                            fullWidth
                        >
                            Recent Journeys
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        fullWidth
                        icon={
                            <Moon
                                size={18}
                                strokeWidth={1.8}
                            />
                        }
                    >
                        Theme
                    </Button>

                    {isAuthenticated ? (
                        <Button
                            variant="secondary"
                            fullWidth
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant="ghost"
                                fullWidth
                                onClick={handleSignup}
                            >
                                Sign Up
                            </Button>

                            <Button
                                variant="primary"
                                fullWidth
                                onClick={loginWithRedirect}
                            >
                                Login
                            </Button>
                        </>
                    )}
                </div>
            )}
        </header>
    )
}

export default Header;