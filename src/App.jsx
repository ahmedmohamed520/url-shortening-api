import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import ResultCard from "./ResultCard";

const App = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shortenedLinks, setShortenedLinks] = useState([]);
    const [linkInputValue, setlinkInputValue] = useState("");
    const [addedLink, setAddedLink] = useState("");

    const navMenuToggleHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Shorten Link Request
    const shortenerLinkHandler = async (link) => {
        try {
            setIsLoading(true);
            setIsError(false);
            let linkRequest = {
                destination: link,
                domain: { fullName: "rebrand.ly" },
            };
            const res = await fetch("https://api.rebrandly.com/v1/links", {
                method: "POST",
                body: JSON.stringify(linkRequest),
                headers: { "Content-Type": "application/json", apikey: "c9014a2dcb2e4ec4800f9a943dc47ca1" },
            });
            const data = await res.json();
            console.log(data);
            setAddedLink(data);
        } catch (err) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Get Num of links
    const getAllShortenedLinks = async (numOfLinks) => {
        const res = await fetch(
            `https://api.rebrandly.com/v1/links?orderBy=createdAt&orderDir=desc&limit=${numOfLinks}`,
            {
                headers: { apikey: "c9014a2dcb2e4ec4800f9a943dc47ca1" },
            }
        );
        const data = await res.json();
        setShortenedLinks(data);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        shortenerLinkHandler(linkInputValue);
        setlinkInputValue("");
    };
    useEffect(() => {
        getAllShortenedLinks(5);
        setAddedLink("");
    }, [addedLink]);
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-container">
                            <a href="/" className="logo">
                                <img src="images/logo.svg" alt="Logo" />
                            </a>
                            <div className={`nav-menu ${isMenuOpen && "show-menu"}`}>
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
                            <div onClick={navMenuToggleHandler} className="nav-toggler">
                                <AiOutlineClose className={`${isMenuOpen && "show"}`} />
                                <GiHamburgerMenu className={`${!isMenuOpen && "show"}`} />
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
                        <form onSubmit={formSubmitHandler} className="shorten-form">
                            <div className="form-group">
                                <input
                                    onChange={(e) => setlinkInputValue(e.target.value)}
                                    value={linkInputValue}
                                    placeholder="Shorten a link here..."
                                    type="text"
                                />
                            </div>
                            <button className="btn btn-form">Shorten it!</button>
                        </form>
                        {/* Shortened Links container */}
                        <div className="results-container">
                            {/* Result card */}
                            {shortenedLinks.map((link) => {
                                return <ResultCard key={link.id} {...link} />;
                            })}
                        </div>

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
