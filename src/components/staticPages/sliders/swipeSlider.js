import { Link } from "react-router-dom";

const SwipeSlider = ({img1, img2, username, heading, currBid}) => {
    return <>
        <picture>
            <img
                src={img1}
                width="940"
                height="640"
                alt="SlideImage"
                loading="lazy"
            />
        </picture>

        <div className="dark-overlay"></div>
        <div className="slide-content">
            <div className="item-info">
                <div className="item-meta">
                    <span className="avatar box-26">
                        <Link to="/profile-page">
                            <picture>
                                <img
                                    src={img2}
                                    alt="avatar"
                                    loading="lazy"
                                    width="100"
                                    height="100"
                                />
                            </picture>
                        </Link>
                        <span className="verified">
                            <svg className="crumina-icon">
                                <use xlinkHref="#check-icon"></use>
                            </svg>
                        </span>
                    </span>
                    {username}
                </div>
                <div className="title slide-title">{heading}</div>
                <div className="item-bid-section">
                    <div className="bid-item">
                        <div className="label">Current bid</div>
                        <div className="value">{currBid}</div>
                    </div>
                    <div className="bid-item">
                        <div className="label">AUCTION ENDING IN</div>
                        <div className="countdown">
                            <div className="value">
                                <span
                                    className="js-countdown"
                                    data-timer="19560"
                                    data-labels="d : , h : , m : , s"
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border_white-bg slide-button">
                        <Link className="btn btn-normal" to="/product-page">
                            Go to Item!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SwipeSlider;