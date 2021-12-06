import cryptokiLogo from "../../../svg";
import { Link } from "react-router-dom";
import { footerImg1, footerImg2, footerImg3, footerImg4, footerImg5, footerImg6, footerImg7, footerImg8 } from "../../../img";

const Footer = () => {
    return <>
        <div className="before-footer-block">
            <div className="before-footer-image"><img src={footerImg1} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg2} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg3} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg4} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg5} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg6} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg7} alt="" /></div>
            <div className="before-footer-image"><img src={footerImg8} alt="" /></div>
        </div>
        <footer className="footer">
            <div className="footer-wrapper container">
                <div className="footer-content flex-space-between">
                    <div className="footer-column footer-column-large">
                        <div className="footer-widget">
                            <div className="logo">
                                <Link className="logo-link" to="/">
                                    <div className="logo-img"><img src={cryptokiLogo} alt="logo" /></div>
                                    <div className="logo-text">Cryptoki</div>
                                </Link>
                            </div>
                            <div className="footer-text">
                                <p>We are a huge marketplace dedicated to connecting great artists of all mediums with their fans and
                                    unique token collectors!</p>
                            </div>
                            <ul className="social-icons-list">
                                <li className="social-icon"><Link to="#"><svg className="crumina-icon">
                                    <use xlinkHref="#facebook-icon"></use>
                                </svg></Link></li>
                                <li className="social-icon"><Link to="#"><svg className="crumina-icon">
                                    <use xlinkHref="#twitter-icon"></use>
                                </svg></Link></li>
                                <li className="social-icon"><Link to="#"><svg className="crumina-icon">
                                    <use xlinkHref="#instagram-icon"></use>
                                </svg></Link></li>
                                <li className="social-icon"><Link to="#"><svg className="crumina-icon">
                                    <use xlinkHref="#twitch-icon"></use>
                                </svg></Link></li>
                                <li className="social-icon"><Link to="#"><svg className="crumina-icon">
                                    <use xlinkHref="#discord-icon"></use>
                                </svg></Link></li>
                            </ul>
                            <div className="subscribe-widget">
                                <form className="cryptoki-subscribe-form subscribe-form" action="forms/submit.php">
                                    <div className="subscribe-form-content">
                                        <input className="subscribe-input" type="email" name="email" id="subscribe-email"
                                            placeholder="Subscribe to our newsletter" />
                                        <button className="subscribe-submit" type="submit"><svg className="crumina-icon">
                                            <use xlinkHref="#arrow-right-icon"></use>
                                        </svg></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">Cryptoki Market</div>
                            <div className="is-two-col-element">
                                <ul className="footer-menu">
                                    <li className="menu-item"><Link className="menu-link" to="/">Home</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="/explore">Explore</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="/creator">Creators</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="/creator">Collectors</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="/spotlight">Spotlight</Link></li>
                                </ul>
                                <ul className="footer-menu">
                                    <li className="menu-item"><Link className="menu-link" to="/profile-page">Profile Page</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="03-explore-v2.html">Artwork Page</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="/activity">Activity</Link></li>
                                    <li className="menu-item"><Link className="menu-link" to="/upload-artwork">Upload Art</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">Explore</div>
                            <ul className="footer-menu">
                                <li className="menu-item"><Link className="menu-link" to="/explore">3D Artworks</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="03-explore-v2.html">Motion Graphics</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="/item-versions">Illustrations</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="/explore">Photography</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="03-explore-v2.html">Pop Culture</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-widget">
                            <div className="widget-title">Helpful Links</div>
                            <ul className="footer-menu">
                                <li className="menu-item"><Link className="menu-link" to="13-blog-classic.html">Our Blog</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="/become-a-creator">Become a Creator</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="/faq">FAQs</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="!#">About Us</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="20-contact.html">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright flex-space-between">
                    <span className="copyright-text">
                        Cryptoki 2021 - All Rights Reserved
                    </span>
                    <ul className="sub-footer-menu">
                        <li className="menu-item"><Link className="menu-link" to="!#">Terms of Service</Link></li>
                        <li className="menu-item"><Link className="menu-link" to="!#">Privacy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;