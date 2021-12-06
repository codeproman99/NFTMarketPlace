import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import CreatorCard from "../../components/staticPages/cards/creatorCard";

const Creator = () => {
    return <>
        <Header />
        <SubHeader />

        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>Explore<span className="gradient-text"> Creators</span></h2>
            </div>
            <div className="filterable-bar">
                <form id="creators-filter-form">
                    <div className="filter-options">
                        <select className="select-nice">
                            <option value="order-by-name" selected>Order by Name (A-Z)</option>
                            <option value="order-by-last-modification">Order by Last Modification</option>
                            <option value="order-by-registration-date">Order by Registration Date</option>
                        </select>
                        <select className="select-nice">
                            <option value="verified-creators-only" selected>Verified Creators Only</option>
                            <option value="all-creators">All Creators</option>
                        </select>

                        <select className="select-nice">
                            <option value="creators-with-active-auctions" selected>Creators with Active Auctions</option>
                            <option value="all-creators">All Creators</option>
                        </select>
                    </div>
                    <div className="filter-button">
                        <button className="btn btn-normal btn-dark">Filter</button>
                    </div>
                </form>
            </div>

            <div className="creators-box grid-4-columns">
                {Array.from(Array(12)).map((x, i) => {
                    return <CreatorCard />
                })}
            </div>

            <div className="pagination-section flex-center">
                <ul className="pagination-list">
                    <li className="page-item page-nav-prev"><a href="#/">Prev</a></li>
                    <li className="page-item"><a href="#/">01</a></li>
                    <li className="page-item"><a href="#/">02</a></li>
                    <li className="page-item"><a href="#/">03</a></li>
                    <li className="page-item page-more-link"><a href="#/">...</a></li>
                    <li className="page-item"><a href="#/">16</a></li>
                    <li className="page-item page-nav-next"><a href="#/">Next</a></li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
}

export default Creator;