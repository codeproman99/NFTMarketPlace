import SubHeader from "../../components/common/header/subHeader";
import { avatar, avatar10, avatar2, avatar5, avatar8, featureItem1, featureItem2, projectThumb1, projectThumb10, projectThumb11, projectThumb12, projectThumb13, projectThumb14, projectThumb15, projectThumb16, projectThumb17, projectThumb18, projectThumb19, projectThumb2, projectThumb20, projectThumb21, projectThumb3, projectThumb4, projectThumb5, projectThumb8, projectThumb9, sliderImg1, sliderImg2, sliderImg3, projectThumb22, subtleImg2, subtleImg1, newsThumb1, newsThumb2, newsThumb3 } from "../../img";
import Header from "./../../components/common/header/header";
import Footer from './../../components/common/footer/footer';
import CardItem from './../../components/staticPages/cards/cardItem';
import { Link } from "react-router-dom";
import SwipeSlider from "../../components/staticPages/sliders/swipeSlider";
import TopCreatorCard from "../../components/staticPages/cards/topCreatorCard";
import BlogCard from './../../components/staticPages/blog/blogCard';

const Home = () => {
    return (
        <>
            <Header />
            <SubHeader />

            <div className="primary-content-area bottom-padding-70">
                <div className="section-padding">
                    <div id="homeSlider" className="swiper">
                        <div className="swiper-wrapper">
                            <div id="slide-1" className="swiper-slide">
                                <SwipeSlider img1={sliderImg3} img2={avatar} username="@DexterStark" heading="Lost in Illustration" currBid="2.31 ETH" />
                            </div>
                            <div id="slide-2" className="swiper-slide slide-content-align-right">
                                <picture>
                                    <img
                                        src={sliderImg1}
                                        width="940"
                                        height="640"
                                        alt="SlideImage"
                                    />
                                </picture>

                                <div className="dark-overlay"></div>
                                <div className="slide-content">
                                    <div className="slide-subtitle">WELCOME TO CRYPTOKI</div>
                                    <div className="slide-title">Discover the Best Artworks!</div>
                                    <div className="gradient-border-purple-bg slide-button">
                                        <Link className="btn btn-normal" to="/explore">
                                            Explore Now!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div id="slide-3" className="swiper-slide">
                                <SwipeSlider img1={sliderImg2} img2={avatar} username="@DexterStark" heading="Breathing Nature" currBid="2.31 ETH" />
                            </div>
                        </div>
                        <div className="homeslider-nav">
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
                    </div>
                </div>


                <div className="container section-padding overflow-hidden">
                    <div className="section-title-wrapper">
                        <div className="section-title"><span className="gradient-text">Featured</span> Items</div>
                        <div className="title-navigation">
                            <div className="featured-carousel-icon swiper-button-prev"><svg className="crumina-icon">
                                <use xlinkHref="#arrow-left2-icon"></use>
                            </svg></div>
                            <div className="featured-carousel-icon swiper-button-next"><svg className="crumina-icon">
                                <use xlinkHref="#arrow-right2-icon"></use>
                            </svg></div>
                        </div>
                    </div>
                    <div className="featured-carousel">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                            </div>
                            <div className="swiper-slide">
                                <CardItem count="68" img1={featureItem2} img2={avatar2} heading="Social Blockz" subHeading="@JackieJ" currBid="1.96 ETH" />
                            </div>
                            <div className="swiper-slide">
                                <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                            </div>
                            <div className="swiper-slide">
                                <CardItem count="68" img1={featureItem2} img2={avatar2} heading="Social Blockz" subHeading="@JackieJ" currBid="1.96 ETH" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title">Top <span className="gradient-text">Creators</span></div>
                    </div>
                    <div className="top-creators-box grid-2-columns">
                        <TopCreatorCard itemNo="01" img1={avatar} img2={projectThumb1} img3={projectThumb2} img4={projectThumb3} />
                        <TopCreatorCard itemNo="02" img1={avatar} img2={projectThumb5} img3={projectThumb9} img4={projectThumb10} />
                        <TopCreatorCard itemNo="03" img1={avatar} img2={projectThumb4} img3={projectThumb11} img4={projectThumb12} />
                        <TopCreatorCard itemNo="04" img1={avatar} img2={projectThumb13} img3={projectThumb14} img4={projectThumb8} />
                        <TopCreatorCard itemNo="05" img1={avatar10} img2={projectThumb15} img3={projectThumb16} img4={projectThumb17} />
                        <TopCreatorCard itemNo="06" img1={avatar8} img2={projectThumb18} img3={projectThumb19} img4={projectThumb20} />
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title"><span className="gradient-text">Newest</span> Items</div>
                        <div className="all-items-link"><Link to="/explore">Explore all Artworks</Link></div>
                    </div>

                    <div className="featured-box">
                        <div className="featured-box-wrapper grid-4-columns">
                            {Array.from(Array(12)).map((x, i) => {
                                return <CardItem count="22" img1={featureItem1} img2={avatar} heading="The Molten Heart" subHeading="@DexterStark" currBid="4.07 ETH" />
                            })}
                        </div>
                        <div className="more-section flex-center">
                            <Link className="btn btn-normal btn-dark" to="03-explore-v2.html">View All Artworks</Link>
                        </div>
                    </div>

                </div>

                <div className="container section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title"><span className="gradient-text">Featured</span> Creators</div>
                        <div className="all-items-link"><Link to="/creator">Explore all Creators</Link></div>
                    </div>
                    <div className="featured-creators-box grid-2-columns">
                        <div className="featured-creators-item">
                            <img src={subtleImg1} width="470" height="640" alt="" loading="lazy" />
                            <div className="featured-creators-wrapper">
                                <div className="featured-creators-info-wrapper">
                                    <div className="featured-creators-info">
                                        <div className="title h4"><Link to="/profile-page">Dexter Stark</Link></div>
                                        <div className="item-meta">
                                            <span className="avatar box-26">
                                                <Link to="/profile-page"><img src={avatar} height="100" width="100" alt="" loading="lazy" /></Link>
                                                <span className="verified"><svg className="crumina-icon"><use xlinkHref="#check-icon"></use></svg></span>
                                            </span>
                                            @DexterStark
                                        </div>
                                    </div>
                                    <div className="follow-me gradient-border_white-bg">
                                        <button className="btn btn-normal">Follow!</button>
                                    </div>
                                </div>
                                <ul className="social-icons-list">
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#link-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#facebook-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#twitter-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#instagram-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#twitch-icon"></use>
                                    </svg></Link></li>
                                </ul>
                                <div className="about-creator">
                                    <p>I’m a graphic designer and illustrator from Mexico City. Since 2 years ago I specialize on big mural
                                        pieces and street art that you can find in countries all around the world!</p>
                                </div>
                                <div className="creator-stats">
                                    <div className="stats-item">
                                        <div className="number title">12.3K</div>
                                        <div className="label">Followers</div>
                                    </div>
                                    <div className="stats-item">
                                        <div className="number title">7.2K</div>
                                        <div className="label">Following</div>
                                    </div>
                                    <div className="stats-item">
                                        <div className="number title">135</div>
                                        <div className="label">Created</div>
                                    </div>
                                    <div className="stats-item">
                                        <div className="number title">9</div>
                                        <div className="label">On Sale</div>
                                    </div>
                                </div>
                                <div className="projects-previews">
                                    <div className="preview-box">
                                        <Link to="/product-page">
                                            <img src={projectThumb1} width="68" height="68" alt="" loading="lazy" />
                                        </Link>
                                    </div>
                                    <div className="preview-box">
                                        <Link to="/product-page-v2"><img src={projectThumb2} height="66" width="66" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box">
                                        <Link to="/product-page-v3"><img src={projectThumb3} width="68" height="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box">
                                        <Link to="/product-page"><img src={projectThumb21} height="50" width="50" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box more-projects">
                                        <Link to="/profile-page"><svg className="crumina-icon"><use xlinkHref="#dots-icon"></use></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-creators-item">
                            <img src={subtleImg2} width="470" height="640" alt="" loading="lazy" />
                            <div className="featured-creators-wrapper">
                                <div className="featured-creators-info-wrapper">
                                    <div className="featured-creators-info">
                                        <div className="title h4"><Link to="/profile-page">Noir Artworks</Link></div>
                                        <div className="item-meta"><span className="avatar box-26">
                                            <Link to="/profile-page"><img src={avatar5} height="52" width="52" alt="" loading="lazy" /></Link>
                                            <span className="verified">
                                                <svg className="crumina-icon">
                                                    <use xlinkHref="#check-icon"></use>
                                                </svg></span></span>@noirArtks</div>
                                    </div>
                                    <div className="follow-me gradient-border_white-bg">
                                        <button className="btn btn-normal">Follow!</button>
                                    </div>
                                </div>
                                <ul className="social-icons-list">
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#twitter-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#instagram-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#twitch-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#pinterest-icon"></use>
                                    </svg></Link></li>
                                    <li className="social-icon icon-border"><Link to="#"><svg className="crumina-icon">
                                        <use xlinkHref="#reddit-icon"></use>
                                    </svg></Link></li>
                                </ul>
                                <div className="about-creator">
                                    <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of my works are
                                        inspired by nature and bio-mechanic themes, but I also create the occasional character.</p>
                                </div>
                                <div className="creator-stats">
                                    <div className="stats-item">
                                        <div className="number title">8.3K</div>
                                        <div className="label">Followers</div>
                                    </div>
                                    <div className="stats-item">
                                        <div className="number title">5.6K</div>
                                        <div className="label">Following</div>
                                    </div>
                                    <div className="stats-item">
                                        <div className="number title">54</div>
                                        <div className="label">Created</div>
                                    </div>
                                    <div className="stats-item">
                                        <div className="number title">5</div>
                                        <div className="label">On Sale</div>
                                    </div>
                                </div>
                                <div className="projects-previews">
                                    <div className="preview-box">
                                        <Link to="/product-page"><img src={projectThumb4} width="68" height="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box">
                                        <Link to="/product-page-v2"><img src={projectThumb11} height="68" width="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box">
                                        <Link to="/product-page-v3"><img src={projectThumb12} width="68" height="68" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box">
                                        <Link to="/product-page"><img src={projectThumb22} height="50" width="50" alt="" loading="lazy" /></Link>
                                    </div>
                                    <div className="preview-box more-projects">
                                        <Link to="/profile-page"><svg className="crumina-icon"><use xlinkHref="#dots-icon"></use></svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="call-to-action-box">
                        <div className="animated-img"></div>
                        <div className="call-to-action-text">
                            <div className="subtitle">COME AND JOIN THEM!</div>
                            <div className="h2">Become a Creator!</div>
                        </div>
                        <div className="subscribe-form">
                            <Link to="/become-a-creator" className="btn btn-normal btn-dark">Start Selling!</Link>
                        </div>
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="section-title-wrapper">
                        <div className="section-title">Latest <span className="gradient-text">News</span></div>
                        <div className="all-items-link"><Link to="12-blog-grid.html">View all Blog Posts</Link></div>
                    </div>
                    <div className="latest-news-box grid-3-columns">
                        <BlogCard img={newsThumb1}
                            description="A cryptocurrency is a digital asset designed to work as a medium of exchange wherein individual coin ownership records..."
                            heading="We explain with details everything you need to know about crypto art and cryptocurrencies!"
                            date="March 26th, 2021"
                            username="Cryptoki"
                            tabButtons={["Guides"]}
                        />

                        <BlogCard img={newsThumb2}
                            description="A cryptocurrency is a digital asset designed to work as a medium of exchange wherein individual coin ownership records..."
                            heading="Here’s a quick guide about how to make money selling your artworks with Criptoki!"
                            date="March 13th, 2021"
                            username="Marina Valentine"
                            tabButtons={["Guides", "News"]}
                        />

                        <BlogCard img={newsThumb3}
                            description="A cryptocurrency is a digital asset designed to work as a medium of exchange wherein individual coin ownership records..."
                            heading="What’s ETH? An in-depth view of the currency used in the market"
                            date="March 4th, 2021"
                            username="Cryptoki"
                            tabButtons={["Currencies"]}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
