import { Link } from "react-router-dom";

const BidCard = ({ img1, bidPlacedBy, time, eth, amount }) => {
    return <div className="placed-bid">
        <div className="bid-placer">
            <div className="avatar box-42">
                <Link to="/profile-page">
                    <img src={img1} alt="avatar" />
                </Link>
            </div>
            <div className="bid-info">
                <div className="bid-title">
                    Bid placed by{" "}
                    <span className="gradient-text">
                        <Link to="/profile-page">{bidPlacedBy}</Link>
                    </span>
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

export default BidCard;