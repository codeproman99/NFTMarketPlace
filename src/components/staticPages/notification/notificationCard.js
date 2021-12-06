const NotificationCard = ({ img, username, commentSubText, commentText, time }) => {
    return <div className="notification">
        <div className="notification-body">
            <div className="thumb-box"><a href="/product-page-v2"><img
                src={img} alt="" /></a><span
                    className="bid-type"><svg className="crumina-icon">
                        <use xlinkHref="#annotation-icon"></use>
                    </svg></span></div>
            <div className="notification-info">
                <div className="message"><a href="/profile-page" className="bold">{username}</a> {commentSubText} <a href="/product-page-v2" className="bold">
                    {commentText}</a></div>
                <div className="publish-date">{time}</div>
            </div>
        </div>
        <div className="action-buttons">
            <button className="close"><svg className="crumina-icon">
                <use xlinkHref="#close-circle-icon"></use>
            </svg></button>
            <form className="cryptoki-form checkbox"><input type="checkbox" name="notif-select" id="1"
                className="cryptoki-checkbox" /><label for="1"></label></form>
        </div>
    </div>
}

export default NotificationCard;