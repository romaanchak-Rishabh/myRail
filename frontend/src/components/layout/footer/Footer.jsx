function Footer() {
    return (
        <footer className="w-full bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-auto">
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-3 gap-10">
                {/* Logo */}
                <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                        myRail
                    </div>
                    <p className="mt-3 text-[var(--color-text-muted)]">
                        Your journey. Live.
                    </p>
                </div>
                {/* Navigation */}
                <div>
                    <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                        Navigation
                    </h2>
                    <ul className="space-y-2 text-[var(--color-text-secondary)]">
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            About
                        </li>
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            History
                        </li>
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            Profile
                        </li>
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                        Contact
                    </h2>
                    <ul className="space-y-2 text-[var(--color-text-secondary)]">
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            Email
                        </li>
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            Github
                        </li>
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            LinkedIn
                        </li>
                        <li className="hover:text-[var(--color-primary)] cursor-pointer transition">
                            Portfolio Website
                        </li>
                    </ul>
                </div>
            </div>
            {/* Bottom */}
            <div className="border-t border-[var(--color-border)] py-4 text-center text-sm text-[var(--color-text-muted)]">
                © {new Date().getFullYear()} myRail. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer