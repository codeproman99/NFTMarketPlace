import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";
import ActivityCard from "../../components/staticPages/cards/activityCard";
import BidCard from "../../components/staticPages/cards/bidsCard";
import {
  avatar,
  avatar3,
  avatar4,
  avatar5,
  featureItem1,
  product2,
} from "../../img";
import CardItem from "./../../components/staticPages/cards/cardItem";

const ProductPageV3 = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <div className="primary-content-area container content-padding">
        <div className="product-page product-version-3">
          <div className="page-title-section">
            <div className="social-share-box">
              <div className="share-icons">
                <a href="#/">
                  <svg className="crumina-icon">
                    <use xlinkHref="#link-icon"></use>
                  </svg>
                </a>
                <a href="#/">
                  <svg className="crumina-icon">
                    <use xlinkHref="#facebook-icon"></use>
                  </svg>
                </a>
                <a href="#/">
                  <svg className="crumina-icon">
                    <use xlinkHref="#twitter-icon"></use>
                  </svg>
                </a>
                <a href="#/">
                  <svg className="crumina-icon">
                    <use xlinkHref="#instagram-icon"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="product-title">
              <h1>The Kobra Kings</h1>
            </div>
            <div className="favourite-section">
              <div className="product-fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon"></use>
                </svg>
                <span className="count">105</span>
              </div>
              <div className="more-link">
                <a href="#/">
                  <svg className="crumina-icon">
                    <use xlinkHref="#dots-icon"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="product-main-info">
            <div className="product-info">
              <div className="small-title">Creator</div>
              <div className="product-author avatar-block">
                <div className="avatar box-42">
                  <a href="/profile-page">
                    <img src={avatar} alt="avatar" />
                  </a>
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon"></use>
                    </svg>
                  </span>
                </div>
                <div className="avatar-meta">
                  <div className="avatar-title">
                    <span className="gradient-text">
                      <a href="/profile-page">Dexter Stark</a>
                    </span>
                  </div>
                  <div className="avatar-meta">@DexterStark</div>
                </div>
              </div>
              <div className="product-description">
                <div className="small-title">Description</div>
                <p>
                  I am a self-taught digital artist who specializes in 3d art
                  and motion graphics. Most of my works are inspired by nature
                  and biomechanic themes.
                </p>
                <p>
                  What does it mean? Biomechanics is the study of the structure,
                  function and motion of the mechanical aspects of biological
                  systems, at any level from whole organisms to organs, cells
                  and cell organelles, using the methods of mechanics.
                  Biomechanics is a branch of biophysics.
                </p>
              </div>
              <div className="product-description">
                <div className="small-title">Additional Details</div>
                <ul className="details-list">
                  <li>
                    <svg className="crumina-icon bullet-icon">
                      <use xlinkHref="#circle-icon"></use>
                    </svg>
                    <span className="detail-label">Size</span>
                    <span className="bold">5000 x 3500px (37MB)</span>
                  </li>
                  <li>
                    <svg className="crumina-icon bullet-icon">
                      <use xlinkHref="#circle-icon"></use>
                    </svg>
                    <span className="detail-label">Formats</span>
                    <span className="bold">MP4, JPEG and PNG</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-media">
              <a
                className="expand-icon"
                data-fslightbox="gallery"
                href={product2}
              >
                <svg className="crumina-icon">
                  <use xlinkHref="#maximize-icon"></use>
                </svg>
              </a>
              <div className="product-img">
                <img src={product2} alt="" />
              </div>
            </div>
            <div className="product-meta-section">
              <div className="product-meta-item">
                <div className="small-title">Current bid</div>
                <div className="value">2.31 ETH</div>
                <div className="caption">125.230 U$D</div>
              </div>
              <div className="product-meta-item">
                <div className="small-title">Edition</div>
                <div className="value">01/40</div>
                <div className="caption">Tokens</div>
              </div>
              <div className="product-meta-item">
                <div className="small-title">Auction ending in</div>
                <div className="countdown">
                  <div
                    className="js-countdown"
                    data-timer="104400"
                    data-labels="Days , Hours , Mins , Secs"
                  ></div>
                </div>
              </div>
              <div className="place-bid">
                <button className="btn btn-wide btn-dark">Place a Bid!</button>
              </div>
            </div>
          </div>

          <div className="bids-listing-section">
            <div className="bids-list">
              <div className="small-title">Bids</div>
              <BidCard img1={avatar3} bidPlacedBy="Crimson Ray" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar4} bidPlacedBy="Jenn Art" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar5} bidPlacedBy="Derek Greyson" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
            </div>
            <div className="bids-list">
              <div className="small-title">Activity</div>

              <BidCard img1={avatar3} bidPlacedBy="Crimson Ray" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar4} bidPlacedBy="Jenn Art" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
              <BidCard img1={avatar5} bidPlacedBy="Derek Greyson" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
             
              <ActivityCard img1={avatar} username="Jackie Jones" time="03/25/2021 at 12:19pm" eth="2.31 ETH" amount="125.230 U$D" />
            </div>
          </div>

          <div className="related-section container">
            <div className="section-title-wrapper">
              <h3>Related Items</h3>
            </div>

            <div className="featured-box grid-4-columns">
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
                currBid="4.07 ETH"
              />
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
                currBid="4.07 ETH"
              />
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
                currBid="4.07 ETH"
              />
              <CardItem
                count="22"
                img1={featureItem1}
                img2={avatar}
                heading="The Molten Heart"
                subHeading="@DexterStark"
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

export default ProductPageV3;
