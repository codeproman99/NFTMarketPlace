const CardItem4 = ({ img1, img2, count, creator, heading, currBid }) => {
    return (
        <div className="featured-item v4">
            <div className="featured-item-wrapper">
                <div className="featured-item-content">
                    <div className="fav-counter"><svg className="crumina-icon">
                        <use xlinkHref="#heart-icon"></use>
                    </svg><span className="count">{count}</span></div>
                    <div className="featured-item-image">
                        <a href="/product-page"><img src={img1} alt="" /></a>
                    </div>
                    <div className="featured-item-author">
                        <div className="title"><a href="/product-page">{heading}</a></div>
                        <div className="item-meta"><span className="gradient-text"><a
                            href="/profile-page">{creator}</a></span></div>
                    </div>
                    <div className="avatar box-42"><a href="/profile-page"><img src={img2} alt="" /></a>
                        <span className="verified"><svg className="crumina-icon">
                            <use xlinkHref="#check-icon"></use>
                        </svg></span>
                    </div>
                    <div className="featured-bidding-section">
                        <div className="featured-item-pricebox">
                            <div className="price">{currBid}</div>
                            <div className="price-caption">Current BID</div>
                        </div>
                        <div className="place-bid"><button className="btn btn-small-wide btn-dark">Bid!</button></div>
                    </div>
                </div>
                <div className="featured-item-post-content">
                    <div className="countdown-box">
                        <div className="label">Ending in</div>
                        <div className="countdown">
                            <div className="value js-countdown" data-timer="104400" data-labels="d: , h: , m: , s"></div>
                        </div>
                    </div>
                    <div className="social-share-box">
                        <div className="social-caption">Share</div>
                        <div className="share-icons">
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
    )
}

export default CardItem4;