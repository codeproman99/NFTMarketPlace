import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CollectionItemCard from "../../components/staticPages/cards/collectionItemCard";
import { artwork1, artwork2, artwork3, artwork4, artwork5, artwork6, artwork7, avatar2, avatar3 } from "../../img";

const SpotLight = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div className="primary-content-area container content-padding">
                <div className="section-padding overflow-hidden">
                    <div className="artworks-carousel">
                        <div className="section-title-wrapper">
                            <div className="section-title"><span className="gradient-text">Artworks</span> of the Week</div>
                            <div className="title-navigation">
                                <div className="featured-carousel-icon swiper-button-prev"><svg className="crumina-icon">
                                    <use xlinkHref="#arrow-left2-icon"></use>
                                </svg></div>
                                <div className="featured-carousel-icon swiper-button-next"><svg className="crumina-icon">
                                    <use xlinkHref="#arrow-right2-icon"></use>
                                </svg></div>
                            </div>
                        </div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="artwork-item">
                                    <div className="artwork-media">
                                        <a href="/product-page-v3"><img src={artwork1}
                                            alt="" /></a>
                                    </div>
                                    <div className="artwork-details">
                                        <h3 className="artwork-title">Social Blockz</h3>
                                        <div className="avatar-block">
                                            <div className="avatar box-42">
                                                <a href="/profile-page">
                                                    <img src={avatar2} alt="avatar" /><span className="verified"><svg
                                                        className="crumina-icon">
                                                        <use xlinkHref="#check-icon"></use>
                                                    </svg></span></a>
                                            </div>
                                            <div className="avatar-meta">
                                                <div className="avatar-title gradient-text"><a
                                                    href="/profile-page">Jackie Jones</a></div>
                                                <div className="avatar-meta">@JackieJ</div>
                                            </div>
                                        </div>
                                        <div className="product-meta-section">
                                            <div className="product-meta-item">
                                                <div className="label">Current bid</div>
                                                <div className="value">2.31 ETH</div>
                                                <div className="caption">125.230 U$D</div>
                                            </div>
                                            <div className="product-meta-item">
                                                <div className="label">AUCTION ENDING IN</div>
                                                <div className="countdown">
                                                    <div className="js-countdown" data-timer="104400"
                                                        data-labels="Days , Hours , Mins , Secs"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <p>Social Blockz was made in a sleek and modern 3D style with a wide range of
                                                elements and techniques that show what can be achieved with the newest
                                                technologies...</p>
                                        </div>
                                        <div className="bidding-section">
                                            <div className="place-bid"><button className="btn btn-wide btn-dark">Place a
                                                Bid!</button></div>
                                            <div className="product-fav-counter gradient-background"><svg className="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg><span className="count">105</span>
                                            </div>
                                            <div className="more-link"><a href="#/">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#dots-icon"></use>
                                                </svg>
                                            </a>
                                            </div>
                                            <div className="social-share-box">
                                                <div className="share-icons">
                                                    <a href="#/">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#link-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#/">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#facebook-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#/"><svg className="crumina-icon">
                                                        <use xlinkHref="#twitter-icon"></use>
                                                    </svg>
                                                    </a>
                                                    <a href="#/"><svg className="crumina-icon">
                                                        <use xlinkHref="#instagram-icon"></use>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="artwork-item">
                                    <div className="artwork-media">
                                        <a href="/product-page-v3"><img src={artwork6}
                                            alt="" /></a>
                                    </div>
                                    <div className="artwork-details">
                                        <h3 className="artwork-title">Canary’s Kitchen</h3>
                                        <div className="avatar-block">
                                            <div className="avatar box-42">
                                                <a href="/profile-page">
                                                    <img src={avatar3} alt="avatar" /><span className="verified"><svg
                                                        className="crumina-icon">
                                                        <use xlinkHref="#check-icon"></use>
                                                    </svg></span></a>
                                            </div>
                                            <div className="avatar-meta">
                                                <div className="avatar-title gradient-text"><a href="/profile-page">The
                                                    Green Goo</a></div>
                                                <div className="avatar-meta">@daGreenGoo</div>
                                            </div>
                                        </div>
                                        <div className="product-meta-section">
                                            <div className="product-meta-item">
                                                <div className="label">Current bid</div>
                                                <div className="value">3.47 ETH</div>
                                                <div className="caption">134.250 U$D</div>
                                            </div>
                                            <div className="product-meta-item">
                                                <div className="label">AUCTION ENDING IN</div>
                                                <div className="countdown">
                                                    <div className="js-countdown" data-timer="104400"
                                                        data-labels="Days , Hours , Mins , Secs"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <p>Canary’s Kitchen was made in a sleek and modern 3D style with a wide range of
                                                elements and techniques that show what can be achieved with the newest
                                                technologies...</p>
                                        </div>
                                        <div className="bidding-section">
                                            <div className="place-bid"><button className="btn btn-wide btn-dark">Place a
                                                Bid!</button></div>
                                            <div className="product-fav-counter gradient-background"><svg className="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg><span className="count">95</span>
                                            </div>
                                            <div className="more-link"><a href="#/">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#dots-icon"></use>
                                                </svg>
                                            </a>
                                            </div>
                                            <div className="social-share-box">
                                                <div className="share-icons">
                                                    <a href="#/">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#link-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#/">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#facebook-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#/"><svg className="crumina-icon">
                                                        <use xlinkHref="#twitter-icon"></use>
                                                    </svg>
                                                    </a>
                                                    <a href="#/"><svg className="crumina-icon">
                                                        <use xlinkHref="#instagram-icon"></use>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="artwork-item">
                                    <div className="artwork-media">
                                        <a href="/product-page-v3"><img src={artwork7}
                                            alt="" /></a>
                                    </div>
                                    <div className="artwork-details">
                                        <h3 className="artwork-title">Crimson Planks</h3>
                                        <div className="avatar-block">
                                            <div className="avatar box-42">
                                                <a href="/profile-page">
                                                    <img src={avatar3} alt="avatar" /><span className="verified"><svg
                                                        className="crumina-icon">
                                                        <use xlinkHref="#check-icon"></use>
                                                    </svg></span></a>
                                            </div>
                                            <div className="avatar-meta">
                                                <div className="avatar-title gradient-text"><a href="/profile-page">The
                                                    Green Goo</a></div>
                                                <div className="avatar-meta">@daGreenGoo</div>
                                            </div>
                                        </div>
                                        <div className="product-meta-section">
                                            <div className="product-meta-item">
                                                <div className="label">Current bid</div>
                                                <div className="value">3.47 ETH</div>
                                                <div className="caption">134.250 U$D</div>
                                            </div>
                                            <div className="product-meta-item">
                                                <div className="label">AUCTION ENDING IN</div>
                                                <div className="countdown">
                                                    <div className="js-countdown" data-timer="104400"
                                                        data-labels="Days , Hours , Mins , Secs"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <p>Crimson Planks was made in a sleek and modern 3D style with a wide range of
                                                elements and techniques that show what can be achieved with the newest
                                                technologies...</p>
                                        </div>
                                        <div className="bidding-section">
                                            <div className="place-bid"><button className="btn btn-wide btn-dark">Place a
                                                Bid!</button></div>
                                            <div className="product-fav-counter gradient-background"><svg className="crumina-icon">
                                                <use xlinkHref="#heart-icon"></use>
                                            </svg><span className="count">112</span>
                                            </div>
                                            <div className="more-link"><a href="#/">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#dots-icon"></use>
                                                </svg>
                                            </a>
                                            </div>
                                            <div className="social-share-box">
                                                <div className="share-icons">
                                                    <a href="#/">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#link-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#/">
                                                        <svg className="crumina-icon">
                                                            <use xlinkHref="#facebook-icon"></use>
                                                        </svg>
                                                    </a>
                                                    <a href="#/"><svg className="crumina-icon">
                                                        <use xlinkHref="#twitter-icon"></use>
                                                    </svg>
                                                    </a>
                                                    <a href="#/"><svg className="crumina-icon">
                                                        <use xlinkHref="#instagram-icon"></use>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-padding overflow-hidden">
                    <div className="collections-carousel">
                        <div className="section-title-wrapper">
                            <div className="section-title"><span className="gradient-text">Curated</span> Collections</div>
                            <div className="title-navigation">
                                <div className="featured-carousel-icon swiper-button-prev"><svg className="crumina-icon">
                                    <use xlinkHref="#arrow-left2-icon"></use>
                                </svg></div>
                                <div className="featured-carousel-icon swiper-button-next"><svg className="crumina-icon">
                                    <use xlinkHref="#arrow-right2-icon"></use>
                                </svg></div>
                            </div>
                        </div>
                        <div className="featured-carousel">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <CollectionItemCard img={artwork2} itemName="Pop Culture" itemCounts="364" />
                                </div>
                                <div className="swiper-slide">
                                    <CollectionItemCard img={artwork3} itemName="Motion Graphics" itemCounts="590" />
                                </div>
                                <div className="swiper-slide">
                                    <CollectionItemCard img={artwork4} itemName="Illustrations" itemCounts="364" />
                                </div>
                                <div className="swiper-slide">
                                    <CollectionItemCard img={artwork5} itemName="3D Art" itemCounts="590" />
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

export default SpotLight;