function Footer() {
    return (
        <footer className="mr-footer">

            <div className="mr-footer__content">

                {/* Brand */}
                <div className="mr-footer__brand">
                    <div className="mr-footer__logo">
                        myRail
                    </div>

                    <p className="mr-footer__tagline">
                        Your journey. Live.
                    </p>
                </div>

                {/* Navigation */}
                <div className="mr-footer__section">
                    <h2 className="mr-footer__heading">
                        Navigation
                    </h2>

                    <ul className="mr-footer__links">
                        <li>
                            <button type="button">
                                About
                            </button>
                        </li>

                        <li>
                            <button type="button">
                                History
                            </button>
                        </li>

                        <li>
                            <button type="button">
                                Profile
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="mr-footer__section">
                    <h2 className="mr-footer__heading">
                        Connect
                    </h2>

                    <ul className="mr-footer__links">
                        <li>
                            <a href="mailto:your-email@example.com">
                                Email
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_blank" rel="noreferrer">
                                Portfolio
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="mr-footer__bottom">
                <span>
                    © {new Date().getFullYear()} myRail
                </span>

                <span>
                    Built for better journeys.
                </span>
            </div>

        </footer>
    )
}

export default Footer