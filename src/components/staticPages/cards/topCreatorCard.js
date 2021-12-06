import { Link } from "react-router-dom";

const TopCreatorCard = ({itemNo, img1, img2, img3, img4 }) => {
    return <div className="top-creator-item">
        <div className="creator-number">{itemNo}</div>
        <div className="creator-box">
            <div className="avatar box-64">
                <Link to="/profile-page">
                    <picture>
                        <img src={img1} alt="avatar" loading="lazy" width="100" height="100" />
                    </picture>
                    <span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon"></use>
                    </svg></span></Link>
            </div>
            <div className="creator-meta">
                <div className="title"><Link to="/profile-page">Dexter Stark</Link></div>
                <div className="creator-meta">@DexterStark</div>
            </div>
        </div>
        <div className="projects-score">
            <div className="number title">135</div>
            <div className="label">Created</div>
        </div>
        <div className="projects-previews">
            <div className="preview-box box-68">
                <Link to="/product-page">
                    <picture>
                        <img src={img2} height="68" width="68" alt="" loading="lazy" />
                    </picture>

                </Link>
            </div>
            <div className="preview-box box-68">
                <Link to="/product-page-v2">
                    <picture>
                        <img src={img3} height="66" width="66" alt="" loading="lazy" />
                    </picture>
                </Link>
            </div>
            <div className="preview-box box-68">
                <Link to="/product-page-v3">
                    <picture>
                        <img src={img4} height="68" width="68" alt="" loading="lazy" />
                    </picture>
                </Link>
            </div>
        </div>
    </div>
}

export default TopCreatorCard;