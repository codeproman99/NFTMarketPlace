import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatar10, avatar14, avatar15, avatar2, avatar5, featureItem1, profileCover1, projectThumb1, projectThumb15, projectThumb16, projectThumb17, projectThumb18, projectThumb8, usFlag } from "../../img";
import CardItem from './../../components/staticPages/cards/cardItem';

const ProfilePageAbout = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div className="primary-content-area profile-page">
                <div className="profile-header-section">
                    <div className="cover-image"><img src={profileCover1} alt="" /></div>
                    <div className="about-author-section container">
                        <div className="profile-header-user-profile">
                            <div className="avatar box-152">
                                <a href="/profile-page"><img src={avatar} alt="" /></a>
                                <span className="verified"><svg className="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </div>
                            <div className="follow-box">
                                <div className="more-link"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#dots-icon"></use>
                                    </svg>
                                </a>
                                </div>
                                <button className="btn btn-normal btn-dark">Follow!</button>
                            </div>
                        </div>
                        <div className="author-primary-info">
                            <div className="activity-meta">
                                <div className="followers-number">
                                    <div className="number">903</div>
                                    <div className="label">Followers</div>
                                </div>
                                <div className="following-number">
                                    <div className="number">56</div>
                                    <div className="label">Following</div>
                                </div>
                                <div className="likes-number">
                                    <div className="number">12K</div>
                                    <div className="label">Likes Received</div>
                                </div>
                            </div>
                            <div className="profile-author-info">
                                <h3 className="author-name gradient-text"><a href="/profile-page">Dexter Stark</a></h3>
                                <div className="author-meta">@DexterStark</div>
                                <div className="download-file">
                                    Ox465d53...d9c6
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#copy-icon"></use>
                                    </svg>
                                </div>
                            </div>
                            <div className="projects-meta">
                                <div className="projects-number">
                                    <div className="number">135</div>
                                    <div className="label">Created</div>
                                </div>
                                <div className="onsale-number">
                                    <div className="number">12</div>
                                    <div className="label">On Sale</div>
                                </div>
                                <div className="country">
                                    <div className="flag"><img src={usFlag} alt="" /></div>
                                    <div className="label">United States</div>
                                </div>
                            </div>
                        </div>
                        <div className="author-description">
                            <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my
                                works are inspired by nature and biomechanic themes. What does it mean? Biomechanics is the
                                study...<span className="bold">Read More</span>
                            </p>
                            <ul className="social-icons-list">
                                <li className="social-icon icon-border"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#link-icon"></use>
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#facebook-icon"></use>
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#twitter-icon"></use>
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#instagram-icon"></use>
                                    </svg>
                                </a></li>
                                <li className="social-icon icon-border"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#twitch-icon"></use>
                                    </svg>
                                </a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="profile-header-mobile">
                    <div className="cover-image"><img src={profileCover1} alt="" /></div>
                    <div className="about-author-section container">
                        <div className="profile-header-user-profile">
                            <div className="avatar box-64 bordered">
                                <a href="/profile-page"><img src={avatar} alt="" /></a>
                                <span className="verified"><svg className="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </div>
                            <div className="profile-author-info">
                                <h5 className="author-name gradient-text"><a href="/profile-page">Dexter Stark</a></h5>
                                <div className="author-meta">@DexterStark</div>
                                <div className="download-file">
                                    Ox465d53...d9c6
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#copy-icon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="follow-container">
                            <div className="more-link-wrapper">
                                <div className="more-link"><a href="#/">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#dots-icon"></use>
                                    </svg>
                                </a>
                                </div>
                            </div>
                            <div className="follow-box">
                                <button className="btn btn-wide btn-dark">Follow!</button>
                            </div>
                        </div>
                    </div>
                    <ul className="social-icons-list">
                        <li className="social-icon icon-border"><a href="#/">
                            <svg className="crumina-icon">
                                <use xlinkHref="#link-icon"></use>
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#/">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon"></use>
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#/">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon"></use>
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#/">
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon"></use>
                            </svg>
                        </a></li>
                        <li className="social-icon icon-border"><a href="#/">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon"></use>
                            </svg>
                        </a></li>
                    </ul>
                    <div className="author-primary-info">
                        <div className="activity-meta">
                            <div className="followers-number">
                                <div className="number">903</div>
                                <div className="label">Followers</div>
                            </div>
                            <div className="following-number">
                                <div className="number">56</div>
                                <div className="label">Following</div>
                            </div>
                            <div className="projects-number">
                                <div className="number">135</div>
                                <div className="label">Created</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="profile-page-container container">
                    <div className="tabs-block swiper-container">
                        <div className="swiper-nav">
                            <div className="swiper-button-next">
                                <svg className="crumina-icon next-button">
                                    <use xlinkHref="#arrow-right2-icon"></use>
                                </svg>
                            </div>
                            <div className="swiper-button-prev">
                                <svg className="crumina-icon prev-button">
                                    <use xlinkHref="#arrow-left2-icon"></use>
                                </svg>
                            </div>
                        </div>

                        <ul className="tabs-list swiper-wrapper">
                            <li className="swiper-slide"><a href="#tab1">Created <span className="count">135</span></a>
                            </li>
                            <li className="swiper-slide"><a href="#tab2">Collected <span className="count">48</span></a></li>
                            <li className="swiper-slide"><a href="#tab3">On Sale <span className="count">12</span></a></li>
                            <li className="swiper-slide"><a href="#tab4">Liked <span className="count">7.2K</span></a></li>
                            <li className="swiper-slide"><a href="#tab5">Following <span className="count">56</span></a></li>
                            <li className="swiper-slide"><a href="#tab6">Followers <span className="count">903</span></a></li>
                            <li className="swiper-slide"><a href="#tab7">Activity</a></li>
                            <li className="swiper-slide active"><a href="#tab8">About</a></li>
                        </ul>

                        <div className="tabs-content-wrapper">
                            <div id="tab1" className="tab">
                                <div className="tab-content">
                                    <div className="featured-box grid-4-columns">
                                        {Array.from(Array(12)).map((x, i) => {
                                            return <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tab"></div>
                            <div id="tab3" className="tab"></div>
                            <div id="tab4" className="tab"></div>
                            <div id="tab5" className="tab"></div>
                            <div id="tab6" className="tab"></div>

                            <div id="tab7" className="tab">
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
                                                    <img src={avatar14} alt="avatar" /></a>
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
                                                <img src={projectThumb15} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item like">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="/profile-page">
                                                    <img src={avatar5} alt="avatar" /></a><span
                                                        className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon"></use>
                                                        </svg></span>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a
                                                        href="/profile-page">Noir Artworks</a></span>
                                                        liked <span className="colored"><a
                                                            href="/product-page-v2">Canary’s Kitchen</a></span>
                                                    </div>
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
                                                    <img src={avatar} alt="avatar" /></a><span
                                                        className="verified"><svg className="crumina-icon">
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
                                                            href="/product-page-v2">Bubblegum Dream</a></span>
                                                        for 3.01ETH
                                                        (169.478 U$D)
                                                    </div>
                                                    <div className="bid-date">56 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="/product-page-v2">
                                                <img src={projectThumb18} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="activity-item listing">
                                            <div className="bid-placer">
                                                <div className="avatar box-42"><a href="/profile-page">
                                                    <img src={avatar2} alt="avatar" /></a><span
                                                        className="verified"><svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon"></use>
                                                        </svg></span>
                                                </div>
                                                <div className="bid-info">
                                                    <div className="bid-title"><span className="gradient-text"><a
                                                        href="/profile-page">Jackie Jones</a></span> just
                                                        listed <span className="colored"><a href="/product-page-v2">Soul
                                                            Picz Block</a></span> for 3.25ETH (259.022
                                                        U$D)
                                                    </div>
                                                    <div className="bid-date">58 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="bid-product"><a href="/product-page-v2">
                                                <img src={projectThumb8} alt="" /></a>
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
                                                <img src={projectThumb16} alt="" /></a>
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
                           
                            <div id="tab8" className="tab active">
                                <div className="tab-content">
                                    <div className="about-author-wrapper">
                                        <div className="author-bio">
                                            <div className="small-title">Full Bio</div>
                                            <p>I am a self-taught digital artist who specializes in 3d art and motion
                                                graphics.
                                                Most of my works are inspired by nature and biomechanic themes.</p>
                                            <p>What does it mean? Biomechanics is the study of the structure, function and
                                                motion of the mechanical aspects of biological systems, at any level from
                                                whole
                                                organisms to organs, cells and cell organelles, using the methods of
                                                mechanics.
                                                Biomechanics is a branch of biophysics.</p>
                                        </div>
                                        <div className="author-details">
                                            <div className="small-title">Details</div>
                                            <ul className="details-list">
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span className="detail-label">Joined</span><span className="bold">January
                                                    5th,
                                                    2021</span></li>
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span className="detail-label">Formats</span><span
                                                    className="bold">Austin, TX -
                                                        United States</span></li>
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span className="detail-label">Email</span><span className="bold"><a
                                                    href="mailto:dexstarkart@fakemail.com">dexstarkart@fakemail.com</a></span>
                                                </li>
                                                <li><svg className="crumina-icon bullet-icon">
                                                    <use xlinkHref="#circle-icon"></use>
                                                </svg><span className="detail-label">Speciality</span><span
                                                    className="bold">Motion
                                                        Graphics</span></li>
                                            </ul>
                                        </div>
                                        <div className="author-social-networks">
                                            <div className="small-title">Social Media</div>
                                            <ul className="social-styled-list">
                                                <li><a href="#/">
                                                    <span className="marker"><svg className="crumina-icon">
                                                        <use xlinkHref="#link-icon"></use>
                                                    </svg></span>www.dexstarkart.com<span className="verified">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#check-icon"></use>
                                                        </svg>
                                                    </span>
                                                </a></li>
                                                <li><a href="#/"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#facebook-icon"></use>
                                                </svg></span>@dexstarkart</a></li>
                                                <li><a href="#/"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#twitter-icon"></use>
                                                </svg></span>@dexstark_art<span className="verified"><svg
                                                    className="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span></a></li>
                                                <li><a href="#/"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#instagram-icon"></use>
                                                </svg></span>@dexstark<span className="verified"><svg
                                                    className="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span></a></li>
                                                <li><a href="#/"><span className="marker"><svg className="crumina-icon">
                                                    <use xlinkHref="#twitch-icon"></use>
                                                </svg></span>@dexstarkstreams</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfilePageAbout;