import React from "react";

const App = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-container">
                            <a href="/" className="logo">
                                <img src="images/logo.svg" alt="Logo" />
                            </a>
                            <div className="nav-menu">
                                <ul className="nav-list">
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">
                                            Features
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link">
                                            Resources
                                        </a>
                                    </li>
                                </ul>
                                <div className="nav-auth">
                                    <button className="btn btn-transparent">Login</button>
                                    <button className="btn">Sign Up</button>
                                </div>
                            </div>
                            <div className="nav-toggler">
                                <img src="images/" alt="" className="show" />
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="header-content">
                        <div className="header-info">
                            <h1 className="heading-primary">More than just shorter links</h1>
                            <p className="header-text">
                                Build your brand's recognition and get detailed insights on how your links are
                                performing.
                            </p>
                            <button className="btn btn-lg">Get Started</button>
                        </div>
                        <div className="header-image">
                            <img src="images/illustration-working.svg" alt="hero image" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="statistics-section">
                <div className="container">
                    <div className="statistics-content">
                        {/* Form */}
                        <form className="shorten-form">
                            <div className="form-group">
                                <input placeholder="Shorten a link here..." type="text" />
                            </div>
                            <button className="btn btn-form">Shorten it!</button>
                        </form>
                        <h2 className="statistics-heading">Advanced Statistics</h2>
                        <p className="statistics-text">
                            Track how your links are performing across the web with our advanced statistics
                            dashboard.
                        </p>

                        <div className="statistics-container">
                            <div className="green-line"></div>
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="images/icon-brand-recognition.svg"
                                        alt="brand recognition image"
                                    />
                                </div>
                                <h3 className="card-title">Brand Recognition</h3>
                                <p className="card-text">
                                    Boost your brand recognition with each click. Generic links don't mean a
                                    thing. Branded links help instil confidence in your content.
                                </p>
                            </div>
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="images/icon-detailed-records.svg"
                                        alt="detailed records image"
                                    />
                                </div>
                                <h3 className="card-title">Branded Records</h3>
                                <p className="card-text">
                                    Gain insights into who is clicking your links. Knowing when and where
                                    people engage with your content helps inform better decisions.
                                </p>
                            </div>
                            {/* Card */}
                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="images/icon-fully-customizable.svg"
                                        alt="fully customizable image"
                                    />
                                </div>
                                <h3 className="card-title">Fully Customizable</h3>
                                <p className="card-text">
                                    Improve brand awareness and content discoverability through customizable
                                    links, supercharging audience engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="boost-section">
                <h2 className="boost-title">Boost your links today</h2>
                <button className="btn btn-md">Get Started</button>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="logo">Shortly</div>
                        {/* Footer links start */}
                        <div className="footer-links-container">
                            {/* Footer links */}
                            <div className="footer-links">
                                <div className="footer-links-title">Features</div>
                                <a href="/" className="footer-link">
                                    Link Shortening
                                </a>
                                <a href="/" className="footer-link">
                                    Branded Links
                                </a>
                                <a href="/" className="footer-link">
                                    Analytics
                                </a>
                            </div>
                            {/* Footer links */}
                            <div className="footer-links">
                                <div className="footer-links-title">Resources</div>
                                <a href="/" className="footer-link">
                                    Blog
                                </a>
                                <a href="/" className="footer-link">
                                    Developers
                                </a>
                                <a href="/" className="footer-link">
                                    Support
                                </a>
                            </div>
                            {/* Footer links */}
                            <div className="footer-links">
                                <div className="footer-links-title">Company</div>
                                <a href="/" className="footer-link">
                                    About
                                </a>
                                <a href="/" className="footer-link">
                                    Our Team
                                </a>
                                <a href="/" className="footer-link">
                                    Careers
                                </a>
                                <a href="/" className="footer-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                        {/* Footer links start */}
                        <div className="footer-socials">
                            <a href="/" className="footer-social">
                                <img src="images/icon-facebook.svg" alt="facebook" />
                            </a>
                            <a href="/" className="footer-social">
                                <img src="images/icon-twitter.svg" alt="twitter" />
                            </a>
                            <a href="/" className="footer-social">
                                <img src="images/icon-pinterest.svg" alt="pinterest" />
                            </a>
                            <a href="/" className="footer-social">
                                <img src="images/icon-instagram.svg" alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
