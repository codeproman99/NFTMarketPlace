import { Link } from "react-router-dom";

const SubHeader = () => {

  return (
    <nav className="border-bottom">
      <div className="navigation-wrapper container flex-space-between align-items-center">
        <ul className="navigation-menu">
          <li className="menu-item">
            <Link className="menu-link" to="/">
              Home
            </Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link className="menu-link" to="#">
              Explore
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <ul className="submenu">
              <li className="menu-item">
                <Link className="menu-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="03-explore-v2.html">
                  Explore v2
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/item-versions">
                  Item versions
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/creator">
              Creators
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/creator">
              Collectors
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/spotlight">
              Spotlight
            </Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link className="menu-link" to="#">
              Product
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <ul className="submenu">
              <li className="menu-item">
                <Link className="menu-link" to="/product-page">
                  Product v1
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" id="loadLinkId" to="/product-page-v2">
                  Product v2
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="/product-page-v3">
                  Product v3
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-megamenu menu-item-has-children">
            <Link className="menu-link" to="#">
              All pages
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <span className="highlighted-item gradient-background">NEW</span>
            <div className="megamenu">
              <div className="megamenu-wrapper">
                <div className="megamenu-column">
                  <div className="megamenu-title">Main Pages</div>
                  <div className="flex-space-between">
                    <ul className="submenu-column">
                      <li className="menu-item">
                        <Link to="/" className="menu-link">
                          Home
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/explore" className="menu-link">
                          Explore
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="03-explore-v2.html" className="menu-link">
                          Explore v2
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/item-versions" className="menu-link">
                          Item versions
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/spotlight" className="menu-link">
                          Spotlight
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/product-page" className="menu-link">
                          Product page
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/product-page-v2" className="menu-link">
                          Product page v2
                        </Link>
                      </li>
                    </ul>
                    <ul className="submenu-column">
                      <li className="menu-item">
                        <Link to="/product-page-v3" className="menu-link">
                          Product page v3
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="12-blog-grid.html" className="menu-link">
                          Blog grid
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="13-blog-classic.html" className="menu-link">
                          Blog classic
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="14-blog-post-centered.html" className="menu-link">
                          Blog postcentered
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="15-blog-post-sidebar.html" className="menu-link">
                          Blog post sidebar
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/faq" className="menu-link">
                          FAQ
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="20-contact.html" className="menu-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="megamenu-column">
                  <div className="megamenu-title">User pages</div>
                  <div className="flex-space-between">
                    <ul className="submenu-column">
                      <li className="menu-item">
                        <Link to="/profile-page" className="menu-link">
                          Profile page
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/profile-page-about" className="menu-link">
                          Profile page about
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/profile-info" className="menu-link">
                          Profile info
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/upload-artwork" className="menu-link">
                          Upload artwork
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/notification" className="menu-link">
                          Notifications
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="27-shopping-cart.html" className="menu-link">
                          Shopping cart
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="28-checkout.html" className="menu-link">
                          Checkout
                        </Link>
                      </li>
                    </ul>
                    <ul className="submenu-column">
                      <li className="menu-item">
                        <Link to="/activity" className="menu-link">
                          Activity
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/creator" className="menu-link">
                          Creators
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/creator" className="menu-link">
                          Collectors
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/become-a-creator" className="menu-link">
                          Become a creator
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/connect-a-wallet" className="menu-link">
                          Connect a wallet
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="21-login.html" className="menu-link">
                          Login
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link to="22-register.html" className="menu-link">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link className="menu-link" to="#">
              Blog
              <span className="indicator">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-down-icon"></use>
                </svg>
              </span>
            </Link>
            <ul className="submenu">
              <li className="menu-item">
                <Link className="menu-link" to="12-blog-grid.html">
                  Blog grid
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="13-blog-classic.html">
                  Blog classic
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="14-blog-post-centered.html">
                  Blog post centered
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="15-blog-post-sidebar.html">
                  Blog post sidebar
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item hidden-menu">
            <Link className="menu-link" to="#">
              <svg className="crumina-icon">
                <use xlinkHref="#dots-icon"></use>
              </svg>
            </Link>
            <ul className="hidden-menu-dropdown submenu">
              <li className="menu-item">
                <Link to="/faq" className="menu-link">
                  Frequently Asked Questions
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/become-a-creator" className="menu-link">
                  Become a Creator
                </Link>
              </li>
              <li className="menu-item">
                <Link to="20-contact.html" className="menu-link">
                  Contact Us
                </Link>
              </li>
              <li className="menu-item">
                <Link to="21-login.html" className="menu-link">
                  Login
                </Link>
              </li>
              <li className="menu-item">
                <Link to="22-register.html" className="menu-link">
                  Register
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="social-icons-list">
          <li className="social-icon">
            <Link to="#">
              <svg className="crumina-icon">
                <use xlinkHref="#facebook-icon"></use>
              </svg>
            </Link>
          </li>
          <li className="social-icon">
            <Link to="#">
              <svg className="crumina-icon">
                <use xlinkHref="#twitter-icon"></use>
              </svg>
            </Link>
          </li>
          <li className="social-icon">
            <Link to="#">
              <svg className="crumina-icon">
                <use xlinkHref="#instagram-icon"></use>
              </svg>
            </Link>
          </li>
          <li className="social-icon">
            <Link to="#">
              <svg className="crumina-icon">
                <use xlinkHref="#twitch-icon"></use>
              </svg>
            </Link>
          </li>
          <li className="social-icon">
            <Link to="#">
              <svg className="crumina-icon">
                <use xlinkHref="#discord-icon"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SubHeader;
