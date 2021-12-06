import { Link } from "react-router-dom";
import { avatar, notiThunb1, notiThunb2, notiThunb3 } from "../../../img";
import cryptokiLogo from "../../../svg";

const Header = () => {
    return <>
        <header className="site-header">
            <div className="topbar padding-top-bottom border-bottom">
                <div className="topbar-wrapper container">

                    <div className="mobile-nav-panel">
                        <div className="mobile-nav-header">

                            <div className="mobile-menu-logo logo"><Link to="/"><img src={cryptokiLogo} alt="" /></Link>
                            </div>

                            <div className="close-icon">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#cross-icon"></use>
                                </svg>
                            </div>

                        </div>

                        <div className="mobile-menu-wrapper">
                            <ul className="mobile-menu">
                                <li className="menu-item"><Link className="menu-link" to="/">Home</Link></li>
                                <li className="menu-item menu-item-has-children"><Link className="menu-link" to="#">Explore
                                    <span className="indicator"><svg className="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span>
                                </Link>
                                    <ul className="submenu">
                                        <li className="menu-item"><Link className="menu-link" to="/explore">Explore</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="03-explore-v2.html">Explore v2</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="/item-versions">Item versions</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item"><Link className="menu-link" to="/creator">Creators</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="/creator">Collectors</Link></li>
                                <li className="menu-item"><Link className="menu-link" to="/spotlight">Spotlight</Link></li>
                                <li className="menu-item menu-item-has-children"><Link className="menu-link" to="#">Product<span
                                    className="indicator"><svg className="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span></Link>
                                    <ul className="submenu">
                                        <li className="menu-item"><Link className="menu-link" to="/product-page">Product v1</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="/product-page-v2">Product v2</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="/product-page-v3">Product v3</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-megamenu menu-item-has-children"><Link className="menu-link" to="#">All
                                    pages<span className="indicator"><svg className="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span><span className="highlighted-item gradient-background">NEW</span></Link>
                                    <div className="megamenu">
                                        <div className="megamenu-wrapper">
                                            <div className="megamenu-column">
                                                <div className="megamenu-title">Main Pages</div>
                                                <div>
                                                    <ul className="submenu-column">
                                                        <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                                                        <li className="menu-item"><Link to="/explore" className="menu-link">Explore</Link></li>
                                                        <li className="menu-item"><Link to="03-explore-v2.html" className="menu-link">Explore v2</Link></li>
                                                        <li className="menu-item"><Link to="/item-versions" className="menu-link">Item versions</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/spotlight" className="menu-link">Spotlight</Link></li>
                                                        <li className="menu-item"><Link to="/product-page" className="menu-link">Product page</Link></li>
                                                        <li className="menu-item"><Link to="/product-page-v2" className="menu-link">Product page
                                                            v2</Link></li>
                                                    </ul>
                                                    <ul className="submenu-column">
                                                        <li className="menu-item"><Link to="/product-page-v3" className="menu-link">Product page
                                                            v3</Link></li>
                                                        <li className="menu-item"><Link to="12-blog-grid.html" className="menu-link">Blog grid</Link></li>
                                                        <li className="menu-item"><Link to="13-blog-classic.html" className="menu-link">Blog classic</Link></li>
                                                        <li className="menu-item"><Link to="14-blog-post-centered.html" className="menu-link">Blog
                                                            postcentered</Link></li>
                                                        <li className="menu-item"><Link to="15-blog-post-sidebar.html" className="menu-link">Blog post
                                                            sidebar</Link></li>
                                                        <li className="menu-item"><Link to="/faq" className="menu-link">FAQ</Link></li>
                                                        <li className="menu-item"><Link to="20-contact.html" className="menu-link">Contact</Link></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="megamenu-column">
                                                <div className="megamenu-title">User pages</div>
                                                <div>
                                                    <ul className="submenu-column">
                                                        <li className="menu-item"><Link to="/profile-page" className="menu-link">Profile page</Link></li>
                                                        <li className="menu-item"><Link to="/profile-page-about" className="menu-link">Profile page
                                                            about</Link></li>
                                                        <li className="menu-item"><Link to="/profile-info" className="menu-link">Profile info</Link></li>
                                                        <li className="menu-item"><Link to="/upload-artwork" className="menu-link">Upload artwork</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="/notification" className="menu-link">Notifications</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="27-shopping-cart.html" className="menu-link">Shopping cart</Link>
                                                        </li>
                                                        <li className="menu-item"><Link to="28-checkout.html" className="menu-link">Checkout</Link></li>
                                                    </ul>
                                                    <ul className="submenu-column">
                                                        <li className="menu-item"><Link to="/activity" className="menu-link">Activity</Link></li>
                                                        <li className="menu-item"><Link to="/creator" className="menu-link">Creators</Link></li>
                                                        <li className="menu-item"><Link to="/creator" className="menu-link">Collectors</Link></li>
                                                        <li className="menu-item"><Link to="/become-a-creator" className="menu-link">Become a
                                                            creator</Link></li>
                                                        <li className="menu-item"><Link to="/connect-a-wallet" className="menu-link">Connect a
                                                            wallet</Link></li>
                                                        <li className="menu-item"><Link to="21-login.html" className="menu-link">Login</Link></li>
                                                        <li className="menu-item"><Link to="22-register.html" className="menu-link">Register</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item menu-item-has-children"><Link className="menu-link" to="#">Blog<span
                                    className="indicator"><svg className="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon"></use>
                                    </svg></span></Link>
                                    <ul className="submenu">
                                        <li className="menu-item"><Link className="menu-link" to="12-blog-grid.html">Blog grid</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="13-blog-classic.html">Blog classic</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="14-blog-post-centered.html">Blog post centered</Link>
                                        </li>
                                        <li className="menu-item"><Link className="menu-link" to="15-blog-post-sidebar.html">Blog post sidebar</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item"><Link className="menu-link" to="/profile-page">My Collection<span className="count">
                                    12</span></Link></li>
                            </ul>
                        </div>

                        <div className="mobile-nav-footer">
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
                        </div>

                    </div>

                    <div className="burger-icon">
                        <svg className="crumina-icon">
                            <use xlinkHref="#menu-icon"></use>
                        </svg>
                    </div>

                    <div className="logo ">
                        <Link className="logo-link" to="/">
                            <div className="logo-img"><img src={cryptokiLogo} alt="logo" /></div>
                            <div className="logo-text">Cryptoki</div>
                        </Link>
                    </div>

                    <div className="searchbox">
                        <form method="get" className="main-search">
                            <input className="main-search-params" type="hidden" name="params" value="all" />
                            <button className="search-params">
                                <span className="search-param-title">All items</span>
                                <svg className="crumina-icon">
                                    <use xlinkHref="#arrow-down-icon"></use>
                                </svg>
                            </button>
                            <ul className="search-dropdown">
                                <li data-param="all">All items</li>
                                <li data-param="auctions">Auctions</li>
                                <li data-param="collections">Collections</li>
                                <li data-param="creators">Creators</li>
                            </ul>
                            <input type="text" className="search-input" name="head-search" id="head-search"
                                placeholder="Enter your search here..." />
                            <button className="search-button">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#search-icon"></use>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <button id="mobile-search">
                        <svg className="crumina-icon open-button">
                            <use id="search" xlinkHref="#search-icon"></use>
                        </svg>
                    </button>

                    <div className="collection-box">
                        <Link className="btn btn-normal btn-dark create-collection" to="/upload-artwork">Create</Link>
                        <div className="collection-title"><Link to="/profile-page">My Collection<span
                            className="count colored">12</span></Link></div>
                    </div>

                    <div className="user-activity-buttons">

                        <div className="cart-button-cont">
                            <button className="cart-button cryptoki-notif-bttn" data-target="cart-dropdown">
                                <span className="counter">3</span>
                                <svg className="crumina-icon">
                                    <use xlinkHref="#bag-icon"></use>
                                </svg>

                            </button>
                            <div id="cart-dropdown" className="cryptoki-notif-target">
                                <div className="title">
                                    Your Cart <span className="colored">3</span>
                                </div>
                                <div className="cart-wrapper">

                                    <div className="cart-product">
                                        <div className="thumb-box">
                                            <Link to="/product-page"><img src={notiThunb1} width="50" height="50" alt="UI templates" loading="lazy" /></Link>
                                        </div>
                                        <div className="purchase-info">
                                            <div className="product-info">
                                                <div className="product-title"><Link to="/product-page">Cryptoki NFT and Digital Market PSD
                                                    Template</Link></div>
                                                <div className="product-price">$12.00</div>
                                            </div>
                                            <div className="product-type ui-templates">UI templates</div>
                                        </div>
                                    </div>

                                    <div className="cart-product">
                                        <div className="thumb-box">
                                            <Link to="/product-page-v2"><img src={notiThunb2} width="50" height="50" alt="Social graphics" loading="lazy" /></Link>
                                        </div>
                                        <div className="purchase-info">
                                            <div className="product-info">
                                                <div className="product-title"><Link to="/product-page-v2">Twitter Gaming Headers Pack 04</Link>
                                                </div>
                                                <div className="product-price">$40.00</div>
                                            </div>
                                            <div className="product-type social-graphics">Social graphics</div>
                                        </div>
                                    </div>

                                    <div className="cart-product">
                                        <div className="thumb-box">
                                            <Link to="/product-page-v3"><img src={notiThunb3} width="50" height="50" alt="Coded templates" loading="lazy" /></Link>
                                        </div>
                                        <div className="purchase-info">
                                            <div className="product-info">
                                                <div className="product-title"><Link to="/product-page-v3">Olympus WP - Social Networking
                                                    Theme</Link></div>
                                                <div className="product-price">$68.00</div>
                                            </div>
                                            <div className="product-type coded-templates">Coded templates</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="total-price">
                                    <div className="heading">Cart Total</div>
                                    <div className="price">$120.00</div>
                                </div>
                                <div className="cart-buttons">
                                    <Link to="27-shopping-cart.html" className="btn-small gradient-background btn-square">Go to Cart</Link>
                                    <Link to="28-checkout.html" className="btn-small btn-dark btn-square">Checkout</Link>
                                </div>
                            </div>
                        </div>

                        <div className="favourites-button-cont"><button className="favourites-button cryptoki-notif-bttn" data-target="">
                            <svg className="crumina-icon">
                                <use xlinkHref="#heart-icon"></use>
                            </svg>
                        </button></div>
                        <div className="notifications-button-cont">
                            <button className="notifications-button cryptoki-notif-bttn" data-target="notifications-dropdown">

                                <span className="counter">10</span>
                                <svg className="crumina-icon">
                                    <use xlinkHref="#bell-icon"></use>
                                </svg>

                            </button>

                            <div id="notifications-dropdown" className="cryptoki-notif-target">
                                <div className="title"> Notifications <span className="colored">10</span></div>
                                <div className="notifications-wrapper cryptoki-scrollbar">

                                    <div className="notification">
                                        <div className="thumb-box">
                                            <img src={notiThunb1} width="50" height="50" alt="" loading="lazy" />
                                            <span className="bid-type"><svg className="crumina-icon">
                                                <use xlinkHref="#annotation-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div className="notification-info">
                                            <div className="message">
                                                <Link to="/profile-page" className="bold">@JackieJ</Link> just commented on <Link
                                                    to="/product-page" className="bold">Cryptoki NFT
                                                    and Digital Market PSD Template</Link>
                                            </div>
                                            <div className="publish-date">2 minutes ago</div>
                                        </div>
                                    </div>

                                    <div className="notification">
                                        <div className="thumb-box"><img src={notiThunb1} height="50" width="50" alt="" loading="lazy" />
                                            <span className="purchase-type">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#wallet-icon"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="notification-info">
                                            <div className="message">
                                                <Link to="/profile-page" className="bold">@CrimsonRay</Link> just purchased<Link
                                                    to="/product-page-v2" className="bold"> Cryptoki NFT
                                                    and Digital Market PSD Template</Link>
                                            </div>
                                            <div className="publish-date">10 minutes ago</div>
                                        </div>
                                    </div>

                                    <div className="notification">
                                        <div className="thumb-box">
                                            <img src={notiThunb2} width="50" height="50" alt="sad" loading="lazy" />
                                            <span className="like-type"><svg className="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div className="notification-info">
                                            <div className="message">
                                                <Link to="/profile-page" className="bold">@NoirArtks</Link> just liked<Link
                                                    to="/product-page-v3" className="bold">Twitter Gaming
                                                    Headers Pack 04</Link>
                                            </div>
                                            <div className="publish-date">37 minutes ago</div>
                                        </div>
                                    </div>

                                    <div className="notification">
                                        <div className="thumb-box"><img src={notiThunb1} height="50" width="50" alt="" loading="lazy" />
                                            <span className="review-type">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#star-icon"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="notification-info">
                                            <div className="message"><Link to="/profile-page" className="bold">@CrimsonRay</Link> just reviewed
                                                <Link to="/product-page" className="bold">Cryptoki NFT and Digital Market PSD Template</Link>
                                            </div>
                                            <div className="publish-date">49 minutes ago</div>
                                        </div>
                                    </div>

                                </div>
                                <Link to="/notification" className="btn-small-fullwidth btn-dark btn-square">View all
                                    Notifications</Link>
                            </div>
                        </div>

                    </div>


                    <div className="header-user-profile cryptoki-notif-bttn" data-target="profile-dropdown">

                        <div className="user-meta">
                            <div className="user_name">Dexter Stark</div>
                            <div className="user_score"><span><svg className="crumina-icon">
                                <use xlinkHref="#circle-icon"></use>
                            </svg></span>291.36 ETH</div>
                        </div>

                        <div className="avatar box-42">
                            <picture>
                                <img src={avatar} alt="avatar" loading="lazy" width="100" height="100" />
                            </picture>

                            <span className="verified"><svg className="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg></span>
                        </div>

                        <div className="closing-icon">
                            <svg className="crumina-icon close-icon">
                                <use xlinkHref="#cross-icon"></use>
                            </svg>
                        </div>

                        <div id="profile-dropdown" className="cryptoki-notif-target">
                            <div className="profile-dropdown-header profile-cover-image"></div>
                            <div className="profile-dropdown-body">
                                <div className="profile-heading">

                                    <div className="profile-avatar avatar box-26">
                                        <img src={avatar} alt="avatar" loading="lazy" height="100" width="100" />
                                        <span className="verified"><svg className="crumina-icon">
                                            <use xlinkHref="#check-icon"></use>
                                        </svg></span>
                                    </div>

                                    <div className="profile-link">
                                        <Link className="btn btn-small gradient-background" to="/profile-page">My Profile</Link>
                                    </div>
                                </div>

                                <ul className="profile-menu">
                                    <li className="profile">
                                        <Link to="/profile-info"><svg className="crumina-icon">
                                            <use xlinkHref="#user-icon"></use>
                                        </svg>Profile Info</Link>
                                    </li>
                                    <li className="account">
                                        <Link to="!#"><svg className="crumina-icon">
                                            <use xlinkHref="#settings-icon"></use>
                                        </svg>Account Settings</Link>
                                    </li>
                                    <li className="notification">
                                        <Link to="!#"><svg className="crumina-icon">
                                            <use xlinkHref="#slide-filter-icon"></use>
                                        </svg>Notification Settings</Link>
                                    </li>
                                    <li className="artwork">
                                        <Link to="/upload-artwork"><svg className="crumina-icon">
                                            <use xlinkHref="#picture-icon"></use>
                                        </svg>Create Artwork</Link>
                                    </li>
                                    <li className="wallet">
                                        <Link to="/connect-a-wallet"><svg className="crumina-icon">
                                            <use xlinkHref="#wallet-icon"></use>
                                        </svg>Wallet info</Link>
                                    </li>
                                    <li className="verification">
                                        <Link to="!#"><svg className="crumina-icon">
                                            <use xlinkHref="#circle-checked-icon"></use>
                                        </svg>Get Verified</Link>
                                    </li>
                                    <li className="logout">
                                        <Link to="#"><svg className="crumina-icon">
                                            <use xlinkHref="#logout-icon"></use>
                                        </svg>Log Out</Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="profile-dropdown-footer">

                                <div className="mode-toggle">
                                    <div className="mode-title"><span><svg className="crumina-icon">
                                        <use xlinkHref="#moon-icon"></use>
                                    </svg></span>Night-mode</div>
                                    <label className="toggle-control">
                                        <input type="checkbox" checked="checked" />
                                        <span className="control"></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="mobile-search-block">
                <form action="#" id="mobile-search-form">
                    <input type="text" className="search-input" name="mobile-search" placeholder="Enter your search here..." />
                    <button className="search-button"><svg className="crumina-icon">
                        <use xlinkHref="#search-icon"></use>
                    </svg></button>
                </form>
            </div>

        </header>

    </>
}

export default Header;