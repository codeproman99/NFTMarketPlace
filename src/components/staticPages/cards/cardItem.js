import { Link } from "react-router-dom";

const CardItem = ({count, img1, img2, heading, subHeading, currBid }) => {
    return (
        <div className="featured-item">
            <div className="featured-item-wrapper">
                <div className="featured-item-content">
                    <div className="fav-counter"><svg className="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span className="count">{count}</span></div>
                    <div className="featured-item-image">
                        <Link to="/product-page">
                            <picture>
                                <img src={img1} width="304" height="340" alt="Featured" />
                            </picture>
                        </Link>
                    </div>
                    <div className="featured-item-info">
                        <div className="featured-countdown">
                            <span className="clock"><svg className="crumina-icon">
                                <use xlinkHref="#clock-icon"></use>
                            </svg></span>
                            <span className="js-countdown" data-timer="76403" data-labels="d : , h : , m : , s"></span>
                        </div>
                        <div className="title"> <Link to="/product-page">{heading}</Link></div>
                        <div className="item-meta">
                            <span className="avatar box-26">
                                <Link to="/profile-page">
                                    <picture>
                                        <img src={img2} alt="avatar" loading="lazy" width="100" height="100" />
                                    </picture>
                                </Link>
                                <span className="verified"><svg className="crumina-icon">
                                    <use xlinkHref="#check-icon"></use>
                                </svg></span>
                            </span>
                            {subHeading}
                        </div>
                    </div>
                </div>
                <div className="featured-item-post-content">
                    <div className="featured-item-pricebox">
                        <div className="price-caption">Current BID</div>
                        <div className="price">{currBid}</div>
                    </div>
                    <div className="social-share-box">
                        <div className="social-caption">Share</div>
                        <div className="share-icons">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon"></use>
                            </svg>
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon"></use>
                            </svg>
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem;