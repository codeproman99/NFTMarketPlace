import { Link } from "react-router-dom";
import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import ActivityCard from "../../components/staticPages/cards/activityCard";
import BidCard from "../../components/staticPages/cards/bidsCard";
import CardItem2 from "../../components/staticPages/cards/cardItem2";
import {
  avatar,
  avatar14,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  featureItem1,
  productLarge1,
} from "../../img";
import AdditionalDetails from "../../components/staticPages/product/additionalDetails";

const ProductPageV2 = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <div>
        <div className="product-page product-version-2">
          <div className="product-media">
            <div className="product-img">
              <Link
                className="expand-icon"
                data-fslightbox="lightbox"
                to={productLarge1}
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#maximize-icon"></use>
                </svg>
              </Link>
              <img src={productLarge1} width="1742" height="980" alt="" />
            </div>
          </div>
          <div className="product-info">
            <div className="product-info-wrapper">
              <div className="page-title-section">
                <h1>Breathing Nature</h1>
              </div>
              <div className="product-author avatar-block">
                <div className="avatar box-42">
                  <img src={avatar} alt="avatar" />
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon"></use>
                    </svg>
                  </span>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title">
                    <span className="gradient-text">Dexter Stark</span>
                  </div>
                  <div className="avatar-meta">@DexterStark</div>
                </div>
              </div>
              <div className="product-meta-section">
                <div className="product-meta-item">
                  <div className="label">Current bid</div>
                  <div className="value">2.31 ETH</div>
                  <div className="caption">125.230 U$D</div>
                </div>
                <div className="product-meta-item">
                  <div className="label">Edition</div>
                  <div className="value">01/40</div>
                  <div className="caption">Tokens</div>
                </div>
                <div className="product-meta-item">
                  <div className="label">AUCTION ENDING IN</div>
                  <div className="countdown">
                    <div
                      className="js-countdown"
                      data-timer="104400"
                      data-labels="Days , Hours , Mins , Secs"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="place-bid">
                <button className="btn btn-wide btn-dark">Place a Bid!</button>
              </div>
              <div className="bidding-section">
                <div className="product-fav-counter">
                  <svg className="crumina-icon">
                    <use xlinkHref="#heart-icon"></use>
                  </svg>
                  <span className="count">105</span>
                </div>
                <div className="more-link">
                  <Link to="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#dots-icon"></use>
                    </svg>
                  </Link>
                </div>
                <div className="social-share-box">
                  <div className="share-icons">
                    <Link to="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#link-icon"></use>
                      </svg>
                    </Link>
                    <Link to="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#facebook-icon"></use>
                      </svg>
                    </Link>
                    <Link to="#">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitter-icon"></use>
                      </svg>
                    </Link>
                    <Link to="">
                      <svg className="crumina-icon">
                        <use xlinkHref="#instagram-icon"></use>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tabs-block swiper-container">
                <div className="swiper-nav">
                  <div className="swiper-button-next">
                    <svg className="crumina-icon next-button">
                      <use xlinkHref="#arrow-right2-icon"></use>
                    </svg>
                  </div>
                  <div className="swiper-button-prev">
                    <svg className="crumina-icon prev-button">
                      <use xlinkHref="#arrow-left2-icon"></use>
                    </svg>
                  </div>
                </div>

                <ul className="tabs-list swiper-wrapper">
                  <li className="swiper-slide">
                    <a href="#tab1">Bids</a>
                  </li>
                  <li className="swiper-slide active">
                    <a href="#tab2">Description</a>
                  </li>
                  <li className="swiper-slide">
                    <a href="#tab3">Additional Details</a>
                  </li>
                  <li className="swiper-slide">
                    <a href="#tab4">Activity</a>
                  </li>
                </ul>

                <div id="tab1" className="tab">
                  <div className="tab-content">
                    <BidCard img1={avatar3} bidPlacedBy="Crimson Ray" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
                    <BidCard img1={avatar4} bidPlacedBy="Jenn Art" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
                    <BidCard img1={avatar5} bidPlacedBy="Derek Greyson" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
                  </div>
                </div>
                <div id="tab2" className="tab active">
                  <div className="tab-content">
                    <div className="product-description">
                      <p>
                        I am a self-taught digital artist who specializes in 3d
                        art and motion graphics. Most of my works are inspired
                        by nature and biomechanic themes.
                      </p>
                      <p>
                        What does it mean? Biomechanics is the study of the
                        structure, function and motion of the mechanical aspects
                        of biological systems, at any level from whole organisms
                        to organs, cells and cell organelles, using the methods
                        of mechanics. Biomechanics is a branch of biophysics.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="tab3" className="tab">
                  <div className="tab-content">
                    <AdditionalDetails />
                  </div>
                </div>

                <div id="tab4" className="tab">
                  <div className="tab-content">
                    <ActivityCard img1={avatar} tag="sale" username="Dexter Stark" time="53 minutes ago" eth="2.31 ETH" amount="125.230 U$D" />
                    <ActivityCard img1={avatar14} tag="purchase" username="Derek Greyson" time="53 minutes ago" eth="2.31 ETH" amount="125.230 U$D" />
                    <ActivityCard img1={avatar2} tag="listing" username="Jackie Jones" time="53 minutes ago" eth="2.31 ETH" amount="125.230 U$D" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="related-section container">
            <div className="section-title-wrapper">
              <h3>Related Items</h3>
            </div>

            <div className="featured-box grid-6-columns">
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
              <CardItem2
                likes="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                currBid="4.07 ETH"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPageV2;
