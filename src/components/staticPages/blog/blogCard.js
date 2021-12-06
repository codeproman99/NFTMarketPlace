import { Link } from "react-router-dom";

const BlogCard = ({ img, heading, description, date, username, tabButtons }) => {
    return <div className="news-item">
        <div className="news-thumb">
            <Link to="14-blog-post-centered.html">
                <img src={img} width="460" height="260" alt="" loading="lazy" /></Link>
        </div>
        <div className="news-content">
            <div className="news-meta">
                <div className="news-tags">
                    {(tabButtons || []).map((v, i) => {
                        return <span key={i} className="tag-item"><Link>{v}</Link></span>
                    })}
                </div>
                by <Link to="/profile-page">{username}</Link>, {date}
            </div>
            <div className="news-title h5"><Link to="15-blog-post-sidebar.html">{heading}</Link></div>
            <div className="news-excerpt">{description}</div>
            <div className="read-more-link">
                <Link to="14-blog-post-centered.html">Read More<svg className="crumina-icon">
                    <use xlinkHref="#arrow-right2-icon"></use>
                </svg></Link>
            </div>
        </div>
    </div>
}

export default BlogCard;