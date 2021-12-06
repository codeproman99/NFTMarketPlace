import { avatar, creatorCover1, projectThumb1, projectThumb2, projectThumb21 } from "../../../img";

const CreatorCard = () => {
    return <div className="creator-item">
        <div className="creator-cover">
            <img src={creatorCover1} alt="" />
        </div>
        <div className="creator-wrapper">
            <div className="creator-info-wrapper">
                <div className="creator-info">
                    <div className="avatar box-64">
                        <a href="/profile-page">
                            <img src={avatar} alt="avatar" /><span class ="verified"><svg class ="crumina-icon">
                            <use xlinkHref="#check-icon"></use>
                            </svg></span></a>
                    </div>
                    <div className="title"><a href="/profile-page">Dexter Stark</a></div>
                    <div className="item-meta"><span className="gradient-text">@DexterStark</span></div>
                </div>
                <div className="follow-me">
                    <button className="btn btn-small btn-dark">Follow!</button>
                </div>
            </div>
            <ul className="social-icons-list">
                <li className="social-icon icon-border"><a href="#/"><svg className="crumina-icon">
                    <use xlinkHref="#link-icon"></use>
                </svg></a></li>
                <li className="social-icon icon-border"><a href="#/"><svg className="crumina-icon">
                    <use xlinkHref="#facebook-icon"></use>
                </svg></a></li>
                <li className="social-icon icon-border"><a href="#/"><svg className="crumina-icon">
                    <use xlinkHref="#twitter-icon"></use>
                </svg></a></li>
                <li className="social-icon icon-border"><a href="#/"><svg className="crumina-icon">
                    <use xlinkHref="#instagram-icon"></use>
                </svg></a></li>
                <li className="social-icon icon-border"><a href="#/"><svg className="crumina-icon">
                    <use xlinkHref="#twitch-icon"></use>
                </svg></a></li>
            </ul>
            <div className="about-creator">
                <p>I am a self-taught digital artist who specializes in 3d art and motion graphics. Most of
                    my...
                </p>
            </div>
            <div className="projects-previews">
                <div className="preview-box"><a href="/product-page-v3"><img
                    src={projectThumb1} alt="" /></a></div>
                <div className="preview-box"><a href="/product-page-v3"><img
                     src={projectThumb2} alt="" /></a></div>
                <div className="preview-box"><a href="/product-page-v3"><img
                     src={projectThumb21} alt="" /></a></div>
                <div className="preview-box more-projects"><a href="/profile-page"><svg className="crumina-icon">
                    <use xlinkHref="#dots-icon"></use>
                </svg></a></div>
            </div>
        </div>
        <div className="creator-stats">
            <div className="stats-item">
                <div className="label">Followers</div>
                <div className="number">903</div>
            </div>
            <div className="stats-item">
                <div className="label">Following</div>
                <div className="number">56</div>
            </div>
            <div className="stats-item">
                <div className="label">Created</div>
                <div className="number">135</div>
            </div>
        </div>
    </div>
}

export default CreatorCard;