import { Link } from "react-router-dom";

const CardItem3 = ({ img1, img2, bidReplaced,edition, creator, heading, currBid, img3 }) => {
    return (
        <div className="featured-item v3">
            <div className="featured-item-wrapper">
                <div className="featured-item-image-wrapper">
                    <div className="featured-item-image">
                        <Link href="/product-page"><img src={img1} alt="" /></Link>
                    </div>
                </div>
                <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                    <use xlinkHref="#clock-icon"></use>
                </svg></span><span className="js-countdown" data-timer="66400" data-labels="d : , h : , m : , s"></span>
                </div>
                <div className="item-meta-wrapper">
                    <div className="title"><Link href="/product-page">{heading}</Link></div>
                    <div className="fav-counter"><svg className="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span className="count">22</span></div>
                </div>

                <div className="item-meta-wrapper">
                    <div className="item-meta">
                        <div className="creator-box">
                            <div className="creator-info">
                                <div className="avatar box-26"><Link href="/profile-page"><img src={img2}
                                    alt="" /></Link><span className="verified"><svg className="crumina-icon">
                                        <use xlinkHref="#check-icon"></use>
                                    </svg></span>
                                </div>
                                <div className="creator-meta">
                                    <div className="creator-label">CREATOR</div>
                                    <div className="creator-name"><Link href="/profile-page">{creator}</Link></div>
                                </div>
                            </div>
                            <div className="featured-item-pricebox">
                                <div className="price-caption">EDITION </div>
                                <div className="price">{edition}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-meta">
                    <div className="creator-box">
                        <div className="creator-info">
                            <div className="avatar box-26"><Link href="/profile-page"><img src={img3}
                                alt="" /></Link><span className="verified"><svg className="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </div>
                            <div className="creator-meta">
                                <div className="creator-label">BID PLACED BY</div>
                                <div className="creator-name"><Link href="/product-page">{bidReplaced}</Link></div>
                            </div>
                        </div>

                        <div className="featured-item-pricebox">
                            <div className="price-caption">Current BID</div>
                            <div className="price">{currBid}</div>
                        </div>
                    </div>
                </div>
                <div className="featured-item-post-content">
                    <div className="social-share-box">
                        <div className="share-icons">
                            <Link href="#/">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#facebook-icon"></use>
                                </svg>
                            </Link>
                            <Link href="#/">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#twitter-icon"></use>
                                </svg>
                            </Link>
                            <Link href="#/">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#instagram-icon"></use>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardItem3;