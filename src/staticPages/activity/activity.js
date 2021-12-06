import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatar10, avatar14, avatar15, avatar2, avatar5, avatar8, projectThumb1, projectThumb14, projectThumb16, projectThumb17, projectThumb5, projectThumb8, projectThumb9 } from "../../img";

const Activity = () => {
    return <>
        <Header />
        <SubHeader />

        <div className="primary-content-area container content-padding">
            <div className="section-title-wrapper">
                <div className="section-title"><span className="gradient-text">Activity</span> Stream</div>
            </div>
            <div className="activity-stream">
                <div className="tabs-block swiper-container">
                    <div className="swiper-nav">
                        <div className="swiper-button-next"><svg className="crumina-icon next-button">
                            <use xlinkHref="#arrow-right2-icon"></use>
                        </svg></div>
                        <div className="swiper-button-prev"><svg className="crumina-icon prev-button">
                            <use xlinkHref="#arrow-left2-icon"></use>
                        </svg></div>
                    </div>
                    <ul className="tabs-list swiper-wrapper">
                        <li className="swiper-slide active"><a href="#tab1">All Activity</a></li>
                        <li className="swiper-slide"><a href="#tab2">Listings</a></li>
                        <li className="swiper-slide"><a href="#tab3">Sales</a></li>
                        <li className="swiper-slide"><a href="#tab4">Purchases</a></li>
                        <li className="swiper-slide"><a href="#tab5">Bids</a></li>
                        <li className="swiper-slide"><a href="#tab6">Likes</a></li>
                        <li className="swiper-slide"><a href="#tab7">Follows</a></li>
                    </ul>
                    <div id="tab1" className="tab active">
                        <div className="tab-content">
                            <div className="activity-list">
                                <div className="activity-item bid">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar15} alt="avatar" /></a>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title">Bid placed by <span className="gradient-text"><a
                                                href="/profile-page">Crimson
                                                Ray</a></span> of 2.31ETH (125.230 U$D) for <span
                                                    className="colored"><a href="/product-page-v2">Breathing
                                                        Nature</a></span> by <span className="gradient-text"><a
                                                            href="/profile-page">Dexter Stark</a></span></div>
                                            <div className="bid-date">32 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb1} alt="" /></a>
                                    </div>
                                </div>
                                <div className="activity-item bid">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar8} alt="avatar" /></a>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title">Bid placed by <span className="gradient-text"><a
                                                href="/profile-page">JennArt</a></span> of 1.90ETH
                                                (86.325 U$D) for
                                                <span className="colored"><a href="/product-page-v2">Social
                                                    Blockz</a></span> by <span className="gradient-text"><a
                                                        href="/profile-page">Jackie Jones</a></span>
                                            </div>
                                            <div className="bid-date">39 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb5} alt="" /></a>
                                    </div>
                                </div>
                                <div className="activity-item like">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar5} alt="avatar" /></a><span className="verified"><svg
                                                className="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title"><span className="gradient-text"><a
                                                href="/profile-page">Noir Artworks</a></span>
                                                liked <span className="colored"><a href="/product-page-v2">Canary’s
                                                    Kitchen</a></span></div>
                                            <div className="bid-date">47 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb16} alt="" /></a>
                                    </div>
                                </div>
                                <div className="activity-item follow">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar10} alt="avatar" /></a><span
                                                className="verified"><svg className="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title"><span className="gradient-text"><a
                                                href="/profile-page">Nicholas Stevens</a></span>
                                                is now following <span className="gradient-text"><a
                                                    href="/profile-page">Jackie Jones</a></span></div>
                                            <div className="bid-date">52 minutes ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="activity-item sale">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar} alt="avatar" /></a><span className="verified"><svg
                                                className="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title"><span className="gradient-text"><a
                                                href="/profile-page">Dexter Stark</a></span> sold
                                                <span className="colored"><a href="/product-page-v2">Golden
                                                    Ebony</a></span> for 1.97ETH (104.368 U$D)
                                            </div>
                                            <div className="bid-date">53 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb17} alt="" /></a>
                                    </div>
                                </div>
                                <div className="activity-item purchase">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar14} alt="avatar" /></a>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title"><span className="gradient-text"><a
                                                href="/profile-page">Derek Greyson</a></span>
                                                purchased <span className="colored"><a
                                                    href="/product-page-v2">Bubblegum Dream</a></span> for
                                                3.01ETH
                                                (169.478 U$D)
                                            </div>
                                            <div className="bid-date">56 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb8} alt="" /></a>
                                    </div>
                                </div>
                                <div className="activity-item listing">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar2} alt="avatar" /></a><span className="verified"><svg
                                                className="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title"><span className="gradient-text"><a
                                                href="/profile-page">Jackie Jones</a></span> just
                                                listed <span className="colored"><a href="/product-page-v2">Soul Picz
                                                    Block</a></span> for 3.25ETH (259.022
                                                U$D)
                                            </div>
                                            <div className="bid-date">58 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb9} alt="" /></a>
                                    </div>
                                </div>
                                <div className="activity-item bid">
                                    <div className="bid-placer">
                                        <div className="avatar box-42"><a href="/profile-page">
                                            <img src={avatar15} alt="avatar" /></a>
                                        </div>
                                        <div className="bid-info">
                                            <div className="bid-title">Bid placed by <span className="gradient-text"><a
                                                href="/profile-page">Crimson
                                                Ray</a></span> of 0.25ETH (67.007u$d) for <span
                                                    className="colored"><a
                                                        href="/product-page-v2">Octo-Oceanic</a></span></div>
                                            <div className="bid-date">59 minutes ago</div>
                                        </div>
                                    </div>
                                    <div className="bid-product"><a href="/product-page-v2">
                                        <img src={projectThumb14} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="load-more_bars">
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                                <div className="load-more_bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
    </>
}

export default Activity;