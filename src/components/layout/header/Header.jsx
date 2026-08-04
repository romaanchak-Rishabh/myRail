import { useState } from 'react'
import ProfileDropdown from './ProfileDropdown'
import { ChevronUp, ChevronDown, HamburgerIcon, Moon, Sun } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {

    const [loggedIn, setLoggedIn] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [darkTheme, setDarkTheme] = useState(true)

    const {
        isAuthenticated,
        loginWithRedirect,
        isLoading,
        logout,
        user,
    } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <header className="w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] px-6 py-4">

            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-[var(--color-primary)]">
                    myRail
                </div>

                {/* Desktop Navigation */}
                { isAuthenticated ? <nav className="hidden md:flex items-center gap-8">
                    <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition">
                        Recent Journey's
                    </button>
                </nav> : null }
                
                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-5">
                    {/* Theme Toggle */}
                    <button onClick={() => setDarkTheme(!darkTheme)} className="px-4 py-2 rounded-lg bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition">
                        {!!darkTheme ? <Moon color='orange' /> : <Sun  color='purple'/>}
                    </button>
                    {
                        isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setProfileOpen(!profileOpen)}
                                    className="vorder border-black rounded-sm px-4 py-2"
                                >
                                    {user?.name} ▾
                                </button>

                                {profileOpen && (
                                    <ProfileDropdown
                                        user={user}
                                        logout={() =>
                                            logout({
                                                logoutParams: {
                                                    returnTo: window.location.origin,
                                                },
                                            })
                                        }
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    className='border border-black rounded-sm px-4 py-2'
                                    onClick={() =>
                                        loginWithRedirect({
                                            authorizationParams: {
                                                screen_hint: "signup",
                                            },
                                        })
                                    }
                                >
                                    Sign Up
                                </button>

                                <button onClick={loginWithRedirect} className='border border-black rounded-sm px-4 py-2'>
                                    Login
                                </button>
                            </div>
                        )
                    }
                </div>
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-[var(--color-primary)]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <HamburgerIcon />
                </button>
            </div>
            {/* Mobile Menu */}
            {/* {
                menuOpen && (
                    <div className="md:hidden mt-5 border-t border-[var(--color-border)] pt-5 space-y-4">
                        <button className="block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                            Recent Journey's
                        </button>
                        <button onClick={() => setDarkTheme(!darkTheme)} className="block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">
                            {!!darkTheme ? <Moon color='orange' /> : <Sun  color='purple'/>}
                        </button>
                        {
                            loggedIn 
                            ?
                            (
                                <button className="block text-[var(--color-primary)]">
                                    Profile
                                </button>
                            )
                            :
                            (
                                <button className="block text-[var(--color-primary)]">
                                    Login
                                </button>
                            )
                        }
                    </div>
                )
            } */}
        </header>
    )
}

export default Header