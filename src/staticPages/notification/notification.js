import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import NotificationCard from "../../components/staticPages/notification/notificationCard";
import { avatar2, notiThumb4, notiThumb5 } from "../../img";

const Notification = () => {
    return (
        <>

            <Header />
            <SubHeader />

            <div className="primary-content-area container grid-aside-main-4-col content-padding">
            <aside>
                <div className="aside-wrapper">
                    <div className="widget widget-filter-panel notifications">
                        <div className="widget-title h6">Filters</div>
                        <form className="cryptoki-form" id="filter-form">
                            <div className="form-group">
                                <div className="small-title">Show</div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="all" id="all" className="cryptoki-checkbox" />
                                    <label for="all">All</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="sales" id="sales" className="cryptoki-checkbox" />
                                    <label for="sales">Sales</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="likes" id="likes" className="cryptoki-checkbox" />
                                    <label for="likes">Likes</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="comments" id="comments" className="cryptoki-checkbox" />
                                    <label for="comments">Comments</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="reviews" id="reviews" className="cryptoki-checkbox" />
                                    <label for="reviews">Reviews</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="checkbox" name="follows" id="follows" className="cryptoki-checkbox" />
                                    <label for="follows">Follows</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="small-title">Order by</div>
                                <div className="form-list-elem">
                                    <input type="radio" name="type" id="newest" className="cryptoki-radio" />
                                    <label for="newest">Newest</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="radio" name="type" id="oldest" className="cryptoki-radio" />
                                    <label for="oldest">Oldest</label>
                                </div>
                                <div className="form-list-elem">
                                    <input type="radio" name="type" id="buy-now" className="cryptoki-radio" />
                                    <label for="buy-now">Buy Now</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
            <div className="main-content-area">
                <div className="page-title">
                    <h2><span className="gradient-text">Notifications</span></h2>
                </div>
                <div className="notifications-list">
                    <div className="command-line">
                        <button className="command select-all">Select All</button>
                        <button className="command">Mark as Read</button>
                        <button className="command delete">Delete</button>
                    </div>
                    <div className="notifications-list-wrapper" >
                        <NotificationCard img={notiThumb4} username="@JackieJ" time="2 minutes ago" commentSubText="just commented on" commentText="Cryptoki NFT and Digital Market PSD Template" />
                        <NotificationCard img={notiThumb4} username=">@CrimsonRay" time="10 minutes ago" commentSubText="just purchased" commentText="Cryptoki NFT and Digital Market PSD Template" />
                       
                        <div className="notification">
                            <div className="notification-body">
                                <div className="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb4} alt="" /></a><span
                                        className="purchase-type"><svg className="crumina-icon">
                                            <use xlinkHref="#wallet-icon"></use>
                                        </svg></span></div>
                                <div className="notification-info">
                                    <div className="message"><a href="/profile-page" className="bold">@CrimsonRay</a>
                                        just purchased<a href="/product-page-v2" className="bold"> Cryptoki NFT and
                                            Digital Market PSD Template</a></div>
                                    <div className="publish-date">10 minutes ago</div>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="close"><svg className="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form className="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="2"
                                        className="cryptoki-checkbox" /><label for="2"></label></form>
                            </div>
                        </div>
                        <div className="notification">
                            <div className="notification-body">
                                <div className="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb5} alt="" /></a><span
                                        className="like-type"><svg className="crumina-icon">
                                            <use xlinkHref="#heart-icon"></use>
                                        </svg></span></div>
                                <div className="notification-info">
                                    <div className="message"><a href="/profile-page" className="bold">@NoirArtks</a> just
                                        liked<a href="/product-page-v2" className="bold">
                                            Twitter Gaming Headers Pack 04</a></div>
                                    <div className="publish-date">37 minutes ago</div>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="close"><svg className="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form className="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="3"
                                        className="cryptoki-checkbox" /><label for="3"></label></form>
                            </div>
                        </div>
                        <div className="notification">
                            <div className="notification-body">
                                <div className="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb4} alt="" /></a><span
                                        className="review-type"><svg className="crumina-icon">
                                            <use xlinkHref="#star-icon"></use>
                                        </svg></span></div>
                                <div className="notification-info">
                                    <div className="message"><a href="/profile-page" className="bold">@CrimsonRay</a>
                                        just reviewed<a href="/product-page-v2" className="bold">
                                            Cryptoki NFT and Digital Market PSD Template</a></div>
                                    <div className="publish-date">49 minutes ago</div>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="close"><svg className="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form className="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="4"
                                        className="cryptoki-checkbox" /><label for="4"></label></form>
                            </div>
                        </div>
                        <div className="notification">
                            <div className="notification-body">
                                <div className="thumb-box"><a href="/product-page-v2"><img
                                            src={notiThumb4} alt="" /></a><span
                                        className="comment-type"><svg className="crumina-icon">
                                            <use xlinkHref="#annotation-dots-icon"></use>
                                        </svg></span></div>
                                <div className="notification-info">
                                    <div className="message"><a href="/profile-page" className="bold">@beardedwndr</a>
                                        just commented<a href="/product-page-v2" className="bold">
                                            Cryptoki NFT and Digital Market PSD Template</a></div>
                                    <div className="publish-date">51 minutes ago</div>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="close"><svg className="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form className="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="5"
                                        className="cryptoki-checkbox" /><label for="5"></label></form>
                            </div>
                        </div>
                        <div className="notification">
                            <div className="notification-body">
                                <div className="avatar box-64">
                                    <a href="/profile-page">
                                        <img src={avatar2} alt="avatar" /><span className="verified"><svg
                                                className="crumina-icon">
                                                <use xlinkHref="#check-icon"></use>
                                            </svg></span></a>
                                </div>
                                <div className="notification-info">
                                    <div className="message"><a href="/profile-page" className="bold">@JackieJ</a> just
                                        started following you
                                    </div>
                                    <div className="publish-date">55 minutes ago</div>
                                </div>
                            </div>
                            <div className="action-buttons">
                                <button className="close"><svg className="crumina-icon">
                                        <use xlinkHref="#close-circle-icon"></use>
                                    </svg></button>
                                <form className="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="6"
                                        className="cryptoki-checkbox" /><label for="6"></label></form>
                            </div>
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

            <Footer />

        </>
    )
}

export default Notification;