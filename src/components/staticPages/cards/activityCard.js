import { Link } from "react-router-dom";

const ActivityCard = ({tag, img1, username, time, eth, amount }) => {
    return <div class={`activity-item ${tag ? tag : ""}`}>
        <div className="bid-placer">
            <div className="avatar box-42">
                <Link to="/profile-page">
                    <img src={img1} alt="avatar" />
                    <span className="verified">
                        <svg className="crumina-icon">
                            <use xlinkHref="#check-icon"></use>
                        </svg>
                    </span>
                </Link>
            </div>
            <div className="bid-info">
                <div className="bid-title">
                    <span className="gradient-text">
                        <Link to="/profile-page">{username}</Link>
                    </span>{" "}
                    {tag}
                </div>
                <div className="bid-date">{time}</div>
            </div>
        </div>
        <div className="bid-box">
            <div className="crypto-value">{eth}</div>
            <div className="currency-value">{amount}</div>
        </div>
    </div>

}

export default ActivityCard;