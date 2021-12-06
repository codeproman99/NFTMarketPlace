import { Link } from "react-router-dom";

const CardItem2 = ({img1, img2, heading, currBid, likes }) => {
    return (
        <div className="featured-item v2">
            <div className="featured-item-wrapper">
                <div className="featured-item-content">
                    <div className="featured-item-image">
                        <Link href="/product-page"><img src={img1} alt="" /></Link>
                    </div>
                    <div className="featured-item-info">
                        <div className="featured-countdown"><span className="clock"><svg className="crumina-icon">
                            <use xlinkHref="#clock-icon"></use>
                        </svg></span><span className="js-countdown" data-timer="116400"
                            data-labels="d : , h : , m : , s"></span></div>
                        <div className="title"><Link href="/product-page">{heading}</Link></div>
                        <div className="item-meta"><span className="avatar box-26"><Link href="/profile-page"><img
                            src={img2} alt="" /></Link><span className="verified"><svg className="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg></span></span>
                            <div className="featured-item-pricebox">
                                <div className="price-caption">Current BID</div>
                                <div className="price">{currBid}</div>
                            </div>
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
                    <div className="fav-counter"><svg className="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span className="count">{likes}</span></div>
                </div>
            </div>
        </div>
    )
}

export default CardItem2;